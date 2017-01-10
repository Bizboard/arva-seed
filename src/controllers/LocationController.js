import {Controller}                     from 'arva-js/core/Controller.js';
import {LocationView}                   from '../views/aboutViews/location/LocationView.js';
import {StorageLocations}               from 'mrbox-shared/models/StorageLocations.js';
import {Injection}                      from 'arva-js/utils/Injection.js'


export class LocationController extends Controller {
    Index(){
        if(!this.locationView) {
            let locations = new StorageLocations();
            this.locationView = new LocationView({locations: locations});
        }
        return this.locationView;
    }
}

//