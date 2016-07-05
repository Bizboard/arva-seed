/**
 * Created by lundfall on 05/07/16.
 */

import {Model}              from 'arva-js/core/Model.js';
import {PrioritisedArray}   from 'arva-js/data/prioritisedArray.js';



export class Monkeys extends PrioritisedArray {
    constructor() {
        super(Monkey);
    }
}

export class Monkey extends Model {
    get character() {}
    get tailLength() {}
    get currentMood() {}
}