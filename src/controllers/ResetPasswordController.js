import {Controller}                 from 'arva-js/core/Controller.js';
import {ResetPasswordView}          from '../views/resetPassword/ResetPasswordView.js';

export class ResetPasswordController extends Controller {
    Index(){
        if(!this.resetPasswordView) {
            this.resetPasswordView = new ResetPasswordView();
        }
        return this.resetPasswordView;
    }
}