import {Controller}                 from 'arva-js/core/Controller.js';
import {EmailLoginView}                   from '../views/emailLogin/EmailLoginView.js';

export class EmailLoginController extends Controller {
    Index(){
        if(!this.emailLoginView) {
            this.emailLoginView = new EmailLoginView();
        }
        return this.emailLoginView;
    }
}