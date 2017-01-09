import {Controller}                 from 'arva-js/core/Controller.js';
import {EmailRegisterView}          from '../views/loginViews/emailRegister/EmailRegisterView.js';
import {EmailRegistration}          from 'arva-kit/utils/authentication/EmailRegistration.js';

import {DialogManager}              from 'arva-js/utils/DialogManager.js'
import {Injection}                  from 'arva-js/utils/Injection.js'
import {OneButtonDialog}            from 'arva-kit/dialogs/OneButtonDialog.js'
import {localize}                   from 'mrbox-shared/utils/Localization.js';
import {Consumer}                   from 'mrbox-shared/models/Consumers.js'


export class EmailRegisterController extends Controller {
    Index() {
        if (!this.emailRegisterView) {
            this.emailRegisterView = new EmailRegisterView();
            this.emailRegisterView.on('cancel', () => {
                this.router.go('Login', 'Index');
            });
            this.emailRegisterView.on('register', (consumerData) => {
                new EmailRegistration().register(consumerData.email, consumerData.password).then((user) => {
                    // TODO Understand why we need to return something in a promise, is it because resolve is never called?
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

    _createConsumer(consumerData, uid) {

        let user = new Consumer(uid, {
            email: consumerData.email,
            firstName: consumerData.firstName,
            lastName: `${consumerData.infix} ${consumerData.lastName}`,
            sex: consumerData.sex
        });
        Injection.provide(Consumer, user);

        return user.synced();
    }


}