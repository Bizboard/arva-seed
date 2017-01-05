import {Controller}                 from 'arva-js/core/Controller.js';
import {LoginView}                  from '../views/loginView/LoginView.js';

import {FacebookLogin}              from 'arva-kit/utils/authentication/FacebookLogin.js';
import {PasswordLogin}              from 'arva-kit/utils/authentication/PasswordLogin.js';

export class LoginController extends Controller {
    
    Index() {
        if (!this.loginView) {
            this.loginView = new LoginView();
            this.loginView.on('facebookLogin', this._facebookAuthenticate);
            this.loginView.on('emailLogin', () => this.router.go('EmailLogin', 'Index'));
            this.loginView.on('emailRegister', () => this.router.go('EmailRegister', 'Index'));
        }
        return this.loginView;
    }

    _facebookAuthenticate() {
        new FacebookLogin().authenticateToDataSource().then((result) => {
            //TODO Continue with something else
        });
    }
}