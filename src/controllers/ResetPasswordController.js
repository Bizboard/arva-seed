import {Controller}                 from 'arva-js/core/Controller.js';
import {ResetPasswordView}          from '../views/resetPasswordView/ResetPasswordView.js';

export class ResetPasswordController extends Controller {
    Index(){
        if(!this.resetPasswordView) {
            this.resetPasswordView = new ResetPasswordView();
        }
        return this.resetPasswordView;
    }
}