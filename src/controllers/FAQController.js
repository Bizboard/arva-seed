import {Controller}                 from 'arva-js/core/Controller.js';
import {FAQView}                    from '../views/aboutViews/FAQ/FAQView.js';

export class FAQController extends Controller {
    Index(){
        if(!this.FAQView) {
            this.FAQView = new FAQView();
        }
        return this.FAQView;
    }
}