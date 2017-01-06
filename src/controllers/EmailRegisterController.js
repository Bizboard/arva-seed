import {Controller}                 from 'arva-js/core/Controller.js';
import {EmailRegisterView}          from '../views/emailRegister/EmailRegisterView.js';
import {EmailRegistration}          from 'arva-kit/utils/authentication/EmailRegistration.js';

import {DialogManager}              from 'arva-js/utils/DialogManager.js'
import {Injection}                  from 'arva-js/utils/Injection.js'
import {OneButtonDialog}            from 'arva-kit/dialogs/OneButtonDialog.js'
import {localize}                   from 'mrbox-shared/utils/Localization.js';



export class EmailRegisterController extends Controller {
    Index(){
        if(!this.emailRegisterView) {
            this.emailRegisterView = new EmailRegisterView();
            this.emailRegisterView.on('cancel', () => {
                this.router.go('Login', 'Index');
            });
            this.emailRegisterView.on('register', ({email, password}) => {
                this.router.go('Login', 'Index');
                new EmailRegistration().register(email, password).then(()=> {
                    this.router.go('Demo', 'Index');
                    //TODO: Change this, this is only for demo
                }).catch(({code}) => {
                    let dialogManager = Injection.get(DialogManager);
                    switch (code){
                        case 'auth/email-already-in-use':
                            dialogManager.show({dialog: new OneButtonDialog({body: localize`The email address in already in use!`, button: {buttonText: 'Ok'}})});
                    }
                });

            });
        }
        return this.emailRegisterView;
    }
}