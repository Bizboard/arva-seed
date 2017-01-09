import {Controller}                 from 'arva-js/core/Controller.js';
import {SettingsView}               from '../views/profileViews/settings/SettingsView.js';

export class SettingsController extends Controller {
    Index(){
        if(!this.settingsView) {
            this.settingsView = new SettingsView();
        }
        return this.settingsView;
    }
}