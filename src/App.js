import {inject}                     from 'di.js';
import FastClick                    from 'fastclick';
import Context                      from 'famous/core/Context.js';
import {App as ArvaApp}             from 'arva-js/core/App.js';
import {Router}                     from 'arva-js/core/Router.js';

/* Here we import all controllers we want to use in the app */
import {HomeController}             from './controllers/HomeController.js';

import {KeyboardShortcuts}          from './utils/KeyboardShortcuts.js';

/* By injecting these constructors, objects of their type will be created
 * and are globally available through the Dependency Injection context. (arva-utils/Context.js)
 * Be sure to add any new controllers you add after HomeController,
 * or the Router won't find them! */
@inject(HomeController, KeyboardShortcuts)
export class App extends ArvaApp {

    constructor(router, context) {

        /* Allow user taps to emit immediately as click events,
         * instead of the default 300ms delay. */
        FastClick(document.body);

        /* Make one of the controllers default, so the router
         * navigates to it if no route is given. */
        router.setDefault(HomeController, 'Index');

        /* Initialize the app with the Router and Famous Context */
        super(router, context);
    }
}