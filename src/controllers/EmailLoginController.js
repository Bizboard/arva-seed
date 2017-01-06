import {Controller}                 from 'arva-js/core/Controller.js';
import {PasswordLogin}              from 'arva-kit/utils/authentication/PasswordLogin.js'
import {Injection}                  from 'arva-js/utils/Injection.js'
import {DialogManager}              from 'arva-js/utils/DialogManager.js'
import {OneButtonDialog}            from 'arva-kit/dialogs/OneButtonDialog.js'
import {localize}                   from 'mrbox-shared/utils/Localization.js';

import {EmailLoginView}             from '../views/emailLogin/EmailLoginView.js';


export class EmailLoginController extends Controller {
    Index(){
        if(!this.emailLoginView) {
            let dialogManager = Injection.get(DialogManager);
            this.emailLoginView = new EmailLoginView();
            this.emailLoginView.on('forgotPassword', (email, password) => {
                dialogManager.show({dialog: new OneButtonDialog({body: localize`Not implemented yet :)`, button: {buttonText: 'Ok'}})});
            });
            this.emailLoginView.on('login', (email, password) => {
                new PasswordLogin().authenticateToDataSource(email, password).then((uid) => {
                    this.router.go('Demo', 'Index');
                    //TODO: Change this, this is only for the demo
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
}

