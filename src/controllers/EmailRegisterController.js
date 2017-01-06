import {Controller}                 from 'arva-js/core/Controller.js';
import {EmailRegisterView}          from '../views/emailRegister/EmailRegisterView.js';
import {EmailRegistration}          from 'arva-kit/utils/authentication/EmailRegistration.js';

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
                    //TODO: continue
                });
            });
        }
        return this.emailRegisterView;
    }
}