/**
 * Created by tom on 17/07/15.
 */

import {FirebaseDataSource}     from 'arva-ds/datasources/FirebaseDataSource.js';
import {createDefaultContext}   from 'arva-mvc/DefaultContext.js';
import {ArvaRouter}             from 'arva-mvc/routers/ArvaRouter.js';
import {App}                    from './App.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import famousCSS                from 'famous/core/famous.css!';

start();

async function start() {
    /* Wait for Cordova to fire a deviceready event if we're on a device,
     * or our /www/cordova.js dummy to trigger the deviceready when the DOM has loaded. */
    await waitUntilReadyFired();

    /* Create a Dependency Injection context with the wanted router and dataSource types. */
    let context = createDefaultContext(ArvaRouter, FirebaseDataSource);

    /* This creates a new instance of the App, which launches the Router
     * and kicks off app execution. */
    context.get(App);
}

function waitUntilReadyFired() {
    return new Promise((resolve) => {
        document.addEventListener('deviceready', () => {
            resolve();
        });
    });
}