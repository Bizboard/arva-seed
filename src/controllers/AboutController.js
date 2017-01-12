import {Controller}                 from 'arva-js/core/Controller.js';
import {StorageLocations}           from 'mrbox-shared/models/StorageLocations.js';


import {FAQView}                    from '../views/about/FAQ/FAQView.js';
import {ContactView}                from '../views/about/contact/ContactView.js';
import {LocationView}               from '../views/about/location/LocationView.js';

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