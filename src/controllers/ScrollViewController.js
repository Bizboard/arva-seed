import {Controller}                 from 'arva-js/core/Controller.js';
import {DataView}                   from '../views/DataView.js';

export class ScrollViewController extends Controller {
    Index(){
        return new DataView();
    }
}