/**
 * Created by lundfall on 16/02/2017.
 */

import {Model}              from 'arva-js/core/Model.js';
import {PrioritisedArray}   from 'arva-js/data/PrioritisedArray.js';

export class Body extends Model {
    get weight() {}
    get height() {}
}

export class Bodies extends PrioritisedArray {
    constructor(options = {}, modelOptions = {}) {
        super(Body, null, null, options, modelOptions);
    }
}