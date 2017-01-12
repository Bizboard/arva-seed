import {Injection}                  from 'arva-js/utils/Injection.js';
import {Controller}                 from 'arva-js/core/Controller.js';
import {DialogManager}              from 'arva-js/utils/DialogManager.js'
import {Consumer}                   from 'mrbox-shared/models/Consumers.js';
import {localize}                   from 'mrbox-shared/utils/Localization.js';
import {OneButtonDialog}            from 'arva-kit/dialogs/OneButtonDialog.js';
import {PasswordLogin}              from 'arva-kit/utils/authentication/PasswordLogin.js';
import {FacebookLogin}              from 'arva-kit/utils/authentication/FacebookLogin.js';
import {EmailRegistration}          from 'arva-kit/utils/authentication/EmailRegistration.js';

import {LoginView}                  from '../views/login/login/LoginView.js';
import {EmailLoginView}             from '../views/login/emailLogin/EmailLoginView.js';
import {ResetPasswordView}          from '../views/login/resetPassword/ResetPasswordView.js';
import {EmailRegisterView}          from '../views/login/emailRegister/EmailRegisterView.js';


export class LoginController extends Controller {

    constructor() {
        super(...arguments);
    }

    Index() {
        if (!this.loginView) {
            this.loginView = new LoginView();
            this.loginView.on('facebookLogin', this._facebookAuthenticate);
            this.loginView.on('emailLogin', () => this.router.go('Login', 'EmailLogin'));
            this.loginView.on('emailRegister', () => this.router.go('Login', 'EmailRegister'));
        }
        return this.loginView;
    }
    ResetPassword(){
        if(!this.resetPasswordView) {
            this.resetPasswordView = new ResetPasswordView();
        }
        return this.resetPasswordView;
    }
    EmailRegister() {
        if (!this.emailRegisterView) {
            this.emailRegisterView = new EmailRegisterView();
            this.emailRegisterView.on('cancel', () => {
                this.router.go('Login', 'Index');
            });
            this.emailRegisterView.on('register', (consumerData) => {
                new EmailRegistration().register(consumerData.email, consumerData.password).then((user) => {
                    this.router.setUser(user);
                    return this._createConsumer(consumerData, user.uid);
                }).then(() => {
                    this.router.go('Profile', 'Index');
                }).catch(({code}) => {
                    let dialogManager = Injection.get(DialogManager);
                    switch (code) {
                        case 'auth/email-already-in-use':
                            dialogManager.show({
                                dialog: new OneButtonDialog({
                                    body: localize`The email address in already in use!`,
                                    button: {buttonText: 'Ok'}
                                })
                            });
                    }
                });

            });
        }
        return this.emailRegisterView;
    }
    EmailLogin(){
        if(!this.emailLoginView) {
            let dialogManager = Injection.get(DialogManager);
            this.emailLoginView = new EmailLoginView();
            this.emailLoginView.on('forgotPassword', (email, password) => {
                dialogManager.show({dialog: new OneButtonDialog({body: localize`Not implemented yet :)`, button: {buttonText: 'Ok'}})});
            });
            this.emailLoginView.on('login', (email, password) => {
                new PasswordLogin().authenticateToDataSource(email, password).then((user) => {
                    this.router.setUser(user);
                    this.router.go('Profile', 'Index');
                }).catch(()=> {
                    dialogManager.show({dialog: new OneButtonDialog({body: localize`Invalid password and/or email!`, button: {buttonText: 'Ok'}})});
                });
            });

            this.emailLoginView.on('cancel', () => {
                this.router.go('Login', 'Index');
            });
        }
        return this.emailLoginView;
    }
    _createConsumer(consumerData, uid) {

        let user = new Consumer(uid, {
            email: consumerData.email,
            firstName: consumerData.firstName,
            lastName: `${consumerData.infix} ${consumerData.lastName}`,
            sex: consumerData.sex
        });

        return user.synced();
    }
    _facebookAuthenticate() {
        new FacebookLogin().authenticateToDataSource().then((user) => {
            this.router.setUser(user);
            this.router.go('Demo', 'Index');
            //TODO Change this since this is only for demo
        });
        /* TODO: add new Consumer object if none with this uid exists yet */
    }
}