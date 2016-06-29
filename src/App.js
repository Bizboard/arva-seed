import firebase                     from 'firebase';

import {FirebaseDataSource}         from 'arva-js/data/datasources/FirebaseDataSource.js';
import {provide}                    from 'arva-js/utils/di/Decorators.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {DataSource}                 from 'arva-js/data/DataSource.js';
import {App as ArvaApp}             from 'arva-js/core/App.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import './famous.css';
import './fonts.css';

/* Here we import all controllers we want to use in the app */
import {HomeController}             from './controllers/HomeController.js';

export class App extends ArvaApp {

    /* References to Dependency Injection created App and Controller instances, so they are not garbage collected. */
    static references = {};

    /* Options that are used in the ArvaApp constructor to properly set up the app. */
    static options = {
        /* Be sure to add any new controllers you add after HomeController,
         * or the Router won't be able to find them! */
        controllers: [HomeController]
    };

    @provide(DataSource)
    static defaultDataSource() {
        firebase.initializeApp({
            apiKey: '<api-key>',
            authDomain: '<subdomain>.firebaseapp.com',
            databaseURL: 'https://<subdomain>.firebaseio.com',
            storageBucket: '<subdomain>.appspot.com'
        });
        return new FirebaseDataSource('/', {});
    }

    /**
     *  Called before the App is constructed and before the other components have loaded.
     */
    static initialize(){
        Injection.addProviders(this.defaultDataSource);

        /* Instantiate this App, which also instantiates the other components. */
        this.references.app = Injection.get(App);
    }

    /**
     * Called after the Router, Famous Context, and Controllers have been instantiated,
     * but before any Controller method is executed by the Router.
     */
    static loaded(){

    }

    /**
     * Called by super class after all components (routing, controllers, views, etc) have been loaded by the Dependency Injection engine.
     */
    done(){

    }
}

document.addEventListener('deviceready', App.initialize.bind(App));