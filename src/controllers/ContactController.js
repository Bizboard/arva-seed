import {Controller}                 from 'arva-js/core/Controller.js';
import {ContactView}                from '../views/aboutViews/contact/ContactView.js';

export class ContactController extends Controller {
    Index(){
        if(!this.contactView) {
            this.contactView = new ContactView();
        }
        return this.contactView;
    }
}