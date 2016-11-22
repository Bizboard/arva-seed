/**
 * Created by lundfall on 18/11/2016.
 */
import {Injection}                          from 'arva-js/utils/Injection.js';
import {DataSource}                         from 'arva-js/data/DataSource.js';

export class PromiseBasedManager {
    constructor() {
        this._dataSource = Injection.get(DataSource);
    }
    async _promiseWithTimeout(promise, milliseconds, actionNameIfError) {
        let isTimedOut = true;
        setTimeout(() => {
            if(isTimedOut){
                throw new Error(`${actionNameIfError} timed out.`)
            }
        }, milliseconds);
        let returnValue = await promise;
        isTimedOut = false;
        return returnValue;
    }
}