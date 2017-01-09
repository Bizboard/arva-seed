import {Controller}                 from 'arva-js/core/Controller.js';
import {ProfileView}                from '../views/profileViews/profile/ProfileView.js';
import {Consumer}                   from 'mrbox-shared/models/Consumers.js'
import {Injection}                  from 'arva-js/utils/Injection.js'


export class ProfileController extends Controller {
    Index(){
        // TODO Understand why there we are not checking if profileView hasn't been created already
        this.profileView = new ProfileView({consumer: Injection.get(Consumer)});
        return this.profileView;

    }
}