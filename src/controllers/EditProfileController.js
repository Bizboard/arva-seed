import {Controller}                 from 'arva-js/core/Controller.js';
import {EditProfileView}            from '../views/profileViews/editProfile/EditProfileView.js';

export class EditProfileController extends Controller {
    Index(){
        if(!this.editProfileView) {
            this.editProfileView = new EditProfileView();
        }
        return this.editProfileView;
    }
}