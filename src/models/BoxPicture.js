/**
 * Created by tom on 23/09/16.
 */

import {Model}              from 'arva-js/core/Model.js';
import {PrioritisedArray}   from 'arva-js/data/PrioritisedArray.js';

//TODO Remove this model it's just for the demo
export class BoxPicture extends Model {
    get url() { return ''; }
}

export class BoxPictures extends PrioritisedArray {
    constructor(uid, dataSource = null, dataSnapshot = null, options = {}, modelOptions = {}) {
        options.path = `BoxPictures/${uid}`;
        super(BoxPicture, dataSource, dataSnapshot, options, modelOptions);
    }
}