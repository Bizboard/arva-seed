import {Controller}                 from 'arva-js/core/Controller.js';
import {LoginView}                   from '../views/login/LoginView.js';

export class LoginController extends Controller {
    Index(){
        if(!this.loginView) {
            this.loginView = new LoginView();
        }
        return this.loginView;
    }
}