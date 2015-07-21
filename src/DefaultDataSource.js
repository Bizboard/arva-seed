import {Provide}                        from 'di.js';
import {DataSource}                     from 'arva-ds/core/DataSource.js';
import {FirebaseDataSource}             from 'arva-ds/datasources/FirebaseDataSource.js';

var root;

@Provide(DataSource)
export class DefaultDataSource {
    /**
     * Sets the default Firebase domain, and any additional path to use in the application-wide DataSource instance.
     * For example, 'https://arva.firebaseio.com/my/path'
     * @param {String} rootPath Path to remote dataSource, including protocol and domain.
     */
    static setRoot(rootPath) {
        root = rootPath;
    }

    /* Provides a Dependency Injectable constructor of a FirebaseDataSource, that allows for setting a root path across the entire app. */
    constructor() {
        return new FirebaseDataSource(root);
    }
}