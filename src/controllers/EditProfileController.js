import {Controller}                 from 'arva-js/core/Controller.js';
import {EditProfileView}            from '../views/editProfile/EditProfileView.js';

export class EditProfileController extends Controller {
    Index(){
        if(!this.editprofileView) {
            this.editprofileView = new EditProfileView();
        }
        return this.editprofileView;
    }
}