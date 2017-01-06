import {Controller}                 from 'arva-js/core/Controller.js';
import {EditPasswordView}           from '../views/editPassword/EditPasswordView.js';

export class EditPasswordController extends Controller {
    Index(){
        if(!this.editpasswordView) {
            this.editpasswordView = new EditPasswordView();
        }
        return this.editpasswordView;
    }
}