import {Controller}                 from 'arva-js/core/Controller.js';
import {EmailRegisterView}              from '../views/emailRegister/EmailRegisterView.js';

export class EmailRegisterController extends Controller {
    Index(){
        if(!this.emailRegisterView) {
            this.emailRegisterView = new EmailRegisterView();
        }
        return this.emailRegisterView;
    }
}