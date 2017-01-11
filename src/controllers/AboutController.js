import {Controller}                 from 'arva-js/core/Controller.js';
import {StorageLocations}           from 'mrbox-shared/models/StorageLocations.js';


import {FAQView}                    from '../views/aboutViews/FAQ/FAQView.js';
import {ContactView}                from '../views/aboutViews/contact/ContactView.js';
import {LocationView}               from '../views/aboutViews/location/LocationView.js';

export class AboutController extends Controller {
    Index(){
        if(!this.contactView) {
            this.contactView = new ContactView();
        }
        return this.contactView;
    }
    FAQ(){
        if(!this.FAQView) {
            this.FAQView = new FAQView();
        }
        return this.FAQView;
    }
    Location(){
        if(!this.locationView) {
            let locations = new StorageLocations();
            this.locationView = new LocationView({locations: locations});
        }
        return this.locationView;
    }
}