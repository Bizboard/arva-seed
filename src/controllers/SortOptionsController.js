import {Controller}                 from 'arva-js/core/Controller.js';
import {SortOptionsView}            from '../components/SortOptionsView.js';

export class SortOptionsController extends Controller {
    Index(){
        if(!this.sortOptionsView) {
            this.sortOptionsView = new SortOptionsView();
        }
        return this.sortOptionsView;
    }
}