import {ArvaRouter}             from 'arva-js/routers/ArvaRouter.js';
import {createDefaultContext}   from 'arva-js/DefaultContext.js';
import {DefaultDataSource}      from './DefaultDataSource.js';
import {App}                    from './App.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import famousCSS                from 'famous/core/famous.css!';

start();

async function start() {
    /* Wait for Cordova to fire a deviceready event if we're on a device,
     * or our /www/cordova.js dummy to trigger the deviceready when the DOM has loaded. */
    await waitUntilReadyFired();

    let dataSourceRoot = localStorage.getItem('SharePointURL') || 'https://bizboardapps.sharepoint.com/JOYce';
    DefaultDataSource.setRoot(dataSourceRoot);
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