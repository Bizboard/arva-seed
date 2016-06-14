import firebase                         from 'firebase';
import {provide}                        from 'di';
import {DataSource}                     from 'arva-js/data/DataSource.js';
import {FirebaseDataSource}             from 'arva-js/data/datasources/FirebaseDataSource.js';

var config;

@provide(DataSource)
export class DefaultDataSource {
    /**
     * Sets the default Firebase domain, and any additional path to use in the application-wide DataSource instance.
     * For example, 'https://arva.firebaseio.com/my/path'
     * @param {Object} configuration Object as required by firebase.initializeApp(). Can be generated at Firebase console -> Overview -> Add Firebase to your web app.
     */
    static setConfig(configuration) {
        config = configuration;
    }

    /* Provides a Dependency Injectable constructor of a FirebaseDataSource, that allows for setting a root path across the entire app. */
    constructor() {
        firebase.initializeApp(config);
        return new FirebaseDataSource('/', {});
    }
}