/**
 * Created by lundfall on 16/11/2016.
 */
import {Injection}                          from 'arva-js/utils/Injection.js';
import {PaymentRequest, Payments, Payment}  from 'mrbox-shared/models/Payments.js';
import {ExternalEnvironment}                from './ExternalEnvironment.js';
import {PromiseBasedManager}                from '../PromiseBasedManager.js';

const agentTimeout = 20000;

export class PaymentManager extends PromiseBasedManager {

    constructor() {
        super();
        this._externalEnvironment = Injection.get(ExternalEnvironment);
        this._initialized = this._dataSource.getAuth().then((auth) => {
            this._userID = auth.uid;
        });
    }

    async executePayment(paymentID) {
        if (this._payment) {
            throw new Error("Payment is already in progress");
        }
        this._externalEnvironment.closeIfOpen();
        await this._initialized;
        this._payment = new Payment(paymentID);
        console.log("Finding pending payment...");
        await this._promiseWithTimeout(this._payment.once('value'), agentTimeout);
        if (this._payment.status === 'pending') {
            console.log("Waiting for the agent to recognize the payment...");
            //TODO: Decide how to make this work...
            let payment = await this._promiseWithTimeout(this._payment.once('changed'), agentTimeout, "Waiting for payment agent");
        }

        switch (this._payment.status) {
            case 'acknowledged':
                if (!this._payment.htmlPostRequest) {
                    throw new Error("Got acknowledged response but no valid request object");
                } else {
                    console.log("Opening buckaroo environment...");
                    /* TODO: Change second argument to false for live environemnt*/
                    await this._externalEnvironment.openBuckarooPayment(this._payment.htmlPostRequest, true);
                }
                break;
            case 'failed':
            case 'rejected':
                throw new Error(`Server responded with unexpected status: ${this._payment.status}. Reason: ${this._payment.reason}`);
            default:
                throw new Error(`Server responded with unexpected status: ${this._payment.status}`)
        }
        /* If the payment is still processing */
        while(this._payment.status === 'acknowledged' || this._payment.status === 'processing'){
            await this._promiseWithTimeout(this._payment.synced(), agentTimeout, "Get payment confirmation from agent");
        }

        this._externalEnvironment.closeIfOpen();

        switch (this._payment.status) {
            case 'rejected':
                throw new Error(`Payment rejected, reason: ${this._payment.reason}`);
                break;
            case 'completed':
                console.log("Payment completed");
                break;
            default:
                console.log(`Error: Server responded with unkown status: ${this._payment.status}`)
        }
        console.log("Finished payment");
        this._payment = null;
    }
}