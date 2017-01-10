import {Controller}                 from 'arva-js/core/Controller.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {LoginView}                  from '../views/loginViews/login/LoginView.js';

import {FacebookLogin}              from 'arva-kit/utils/authentication/FacebookLogin.js';
import {PasswordLogin}              from 'arva-kit/utils/authentication/PasswordLogin.js';

//TODO It's probably better to refactor this with EmailLoginController, EmailRegisterController to merge all login related stuff to the same controller
export class LoginController extends Controller {

    constructor() {
        super(...arguments);
    }

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
            this.router.go('Demo', 'Index');
            //TODO Change this since this is only for demo
        });
    }
}