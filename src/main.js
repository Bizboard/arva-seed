import {ArvaRouter}             from 'arva-js/routers/ArvaRouter.js';
import {createDefaultContext}   from 'arva-js/DefaultContext.js';
import {DefaultDataSource}      from './DefaultDataSource.js';
import {App}                    from './App.js';
import './polyfills.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import 'famous/core/famous.css!';
import './fonts.css!';

start();

async function start() {
    /* Wait for Cordova to fire a deviceready event if we're on a device,
     * or our /www/cordova.js dummy to trigger the deviceready when the DOM has loaded. */
    await waitUntilReadyFired();

    /* Create a Dependency Injection context with the wanted router and dataSource types.
     * If you want a DataSource other than Firebase, edit DefaultDataSource.js to return an instance of it.
     *
     * Generate this config automatically in the Firebase console -> Overview -> Add Firebase to your web app. */
    DefaultDataSource.setConfig({
        apiKey: '<api-key>',
        authDomain: '<subdomain>.firebaseapp.com',
        databaseURL: 'https://<subdomain>.firebaseio.com',
        storageBucket: '<subdomain>.appspot.com'
    });
    let context = createDefaultContext(ArvaRouter, DefaultDataSource);

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
