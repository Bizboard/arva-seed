import {Controller}                 from 'arva-js/core/Controller.js';
import {EmailLoginView}                   from '../views/emailLogin/EmailLoginView.js';
import {PasswordLogin}                         from 'arva-kit/utils/authentication/PasswordLogin.js'



export class EmailLoginController extends Controller {
    Index(){
        if(!this.emailLoginView) {
            this.emailLoginView = new EmailLoginView();
            this.emailLoginView.on('login', (email, password) => {
                new PasswordLogin().authenticateToDataSource(email, password).then((uid) => {
                    //TODO: Continue here
                })
            })
        }
        return this.emailLoginView;
    }
}