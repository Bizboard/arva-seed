import {Controller}                 from 'arva-js/core/Controller.js';
import {ProfileView}          from '../views/profile/ProfileView.js';

export class ProfileController extends Controller {
    Index(){
        if(!this.profileView) {
            this.profileView = new ProfileView();
        }
        return this.profileView;
    }
}