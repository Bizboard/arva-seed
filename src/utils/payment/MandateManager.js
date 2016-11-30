/**
 * Created by lundfall on 25/11/2016.
 */
import {Injection}                          from 'arva-js/utils/Injection.js';
import {SetMandateRequest}                  from 'mrbox-shared/models/SetMandateRequests.js';
import {Consumer}                           from 'mrbox-shared/models/Consumers.js';
import {ExternalEnvironment}                from './ExternalEnvironment.js';
import {PromiseBasedManager}                from '../PromiseBasedManager.js';

/**
 * A mandate is a permission to withdraw money from someone's account
 */
export class MandateManager extends PromiseBasedManager {

    constructor() {
        super();
        this._externalEnvironment = Injection.get(ExternalEnvironment);
        this._initialized = this._dataSource.getAuth().then((auth) => {
            this._userID = auth.uid;
        });
    }

    async requestMandateSet(bankID) {
        if(this._mandateRequest){
            throw new Error('There is already a mandate request in process');
        }
        console.log("Waiting for initialization to complete");
        await this._initialized;
        this._mandateRequest = new SetMandateRequest(null, {bankID, consumerID: this._userID, status: "pending"});
        console.log("Waiting for mandate request to upload");
        await this._mandateRequest.once('value');
        console.log("Waiting for mandate request to be acknowledged by the agent");
        await this._mandateRequest.once('changed');
        switch(this._mandateRequest.status){
            case 'acknowledged':
                console.log("Waiting for the environment to finish");
                await this._externalEnvironment.openElectronicMandate(this._mandateRequest.redirectURL);
                break;
            default:
                throw new Error(`The server responded with an unkown status: ${this._mandateRequest.status}`)
        }
        console.log("Waiting for the agent to acknowledge the result");
        await this._mandateRequest.once('changed');
        switch(this._mandateRequest.status){
            case 'complete':
                break;
            case 'failed':
            case 'rejected':
                throw new Error(`Mandate creation failed. Reason: ${this._mandateRequest.reason || 'Unkown reason'}`)
            default:
                throw new Error(`The server responded with an unkown status: ${this._mandateRequest.status}`)
        }
        let currentConsumer = Injection.get(Consumer, this._userID);
        console.log("Waiting for the consumer to be loaded");
        await currentConsumer.once('value');
        if(!currentConsumer.billingInformation || !currentConsumer.billingInformation.mandateID || !currentConsumer.billingInformation.timestampMandateIssued){
            console.log("Waiting for the mandateID to be set");
            await currentConsumer.once('changed');
        }
        if(!currentConsumer.billingInformation || !currentConsumer.billingInformation.mandateID || !currentConsumer.billingInformation.timestampMandateIssued){
            throw new Error(`Request acknowledged but the mandateID wasn't properly set`);
        }
        return currentConsumer.billingInformation.mandateID;
    }
}