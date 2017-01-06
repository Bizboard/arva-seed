/**
 * Created by lundfall on 16/11/2016.
 */
import {Injection}                          from 'arva-js/utils/Injection.js';
import {DataSource}                         from 'arva-js/data/DataSource.js';
import {PaymentRequest, Payments, Payment}  from 'mrbox-shared/models/Payments.js';
import {PromiseBasedManager}                from '../PromiseBasedManager.js';

const agentTimeout = 20000;

export class RequestManager extends PromiseBasedManager {


    constructor() {
        super();
        this._dataSource = Injection.get(DataSource);
        this._payment = new Payment();
        this._initialized = this._dataSource.getAuth().then((auth) => {
            this._userID = auth.uid;
        });
    }



    async makeRequest({culture = "NL", currency = "EUR", description, items}) {
        let currency = "EUR";
        //Write a request to the database
    }
}