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
    constructor(dataSource = null, dataSnapshot = null, options = null, modelOptions = {}) {
        super(Body, dataSource, dataSnapshot, options, modelOptions);
    }
}