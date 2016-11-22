/**
 * Created by lundfall on 16/11/2016.
 */
import {Injection}                          from 'arva-js/utils/Injection.js';
import {DataSource}                         from 'arva-js/data/DataSource.js';
import {PaymentRequest, Payments, Payment}  from 'mrbox-shared/models/Payments.js';
import {BuckarooEnvironment}                from './BuckarooEnvironment.js';
import {PromiseBasedManager}                from '../PromiseBasedManager.js';

const agentTimeout = 20000;

export class PaymentManager extends PromiseBasedManager {

    constructor() {
        super();
        this._buckarooEnvironment = Injection.get(BuckarooEnvironment);
        this._initialized = this._dataSource.getAuth().then((auth) => {
            this._userID = auth.uid;
            this._payments = new Payments();
        });
    }

    async executePayment(paymentID) {
        if (this._payment) {
            throw new Error("Payment is already in progress");
        }
        this._buckarooEnvironment.closeIfOpen();
        await this._initialized;
        this._payment = new Payment(paymentID);
        console.log("Finding pending payment...");
        //TODO: Decide how to make this work...
        await this._promiseWithTimeout(this._payment.once('changed'), agentTimeout);
        if (this._payment.status === 'pending') {
            console.log("Waiting for the agent to recognize the payment...");
            let payment = await this._promiseWithTimeout(this._payment.once('value'), agentTimeout, "Waiting for payment agent");
        }

        switch (this._payment.status) {
            case 'acknowledged':
                if (!this._payment.requestObject) {
                    throw new Error("Got acknowledged response but no valid request object");
                } else {
                    console.log("Opening buckaroo environment...");
                    /* TODO: Change second argument to false for live environemnt*/
                }
                break;
            case 'failed':
            case 'rejected':
                throw new Error(`Server responded with unexpected status: ${this._payment.status}. Reason: ${this._payment.reason}`);
            default:
                throw new Error(`Server responded with unexpected status: ${this._payment.status}`)
        }
        let buckarooEnvironmentPromise = this._buckarooEnvironment.openBuckarooEnvironment(this._payment.requestObject, true);

        if (this._payment.status === 'acknowledged') {
            await this._promiseWithTimeout(Promise.all([this._payment.synced(), buckarooEnvironmentPromise]), agentTimeout, "Get payment confirmation from agent");
            this._buckarooEnvironment.closeIfOpen();
        }
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