import {provide}                        from 'di.js';
import {DataSource}                     from 'arva-js/data/DataSource.js';
import {SharePointDataSource}             from 'arva-js/data/datasources/SharePointDataSource.js';

var root;

@provide(DataSource)
export class DefaultDataSource {
    /**
     * Sets the default SharePoint domain, and any additional path to use in the application-wide DataSource instance.
     * For example, 'https://bizboard.sharepoint.com/'
     * @param {String} rootPath Path to remote dataSource, including protocol and domain.
     */
    static setRoot(rootPath) {
        root = rootPath;
    }

    /* Provides a Dependency Injectable constructor of a FirebaseDataSource, that allows for setting a root path across the entire app. */
    constructor(path = null) {
        /* If path is not a full URL, prepend it with the root. */
        if(path && path.indexOf('http') === -1) { path = `${root}/${path}` }

        return new SharePointDataSource(path || root);
    }
}
