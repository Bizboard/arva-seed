import 'babel-polyfill';
import firebase                     from 'firebase';

import {FirebaseDataSource}         from 'arva-js/data/datasources/FirebaseDataSource.js';
import 'arva-js/utils/hotfixes/IESupport.js';
import {provide}                    from 'arva-js/utils/di/Decorators.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {DataSource}                 from 'arva-js/data/DataSource.js';
import {App as ArvaApp}             from 'arva-js/core/App.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import './famous.css';
import './fonts.css';

/* Here we import all controllers we want to use in the app */
import {HomeController}             from './controllers/HomeController.js';

import './utils/debugging.js';

export class App extends ArvaApp {

    /* References to Dependency Injection created App and Controller instances, so they are not garbage collected. */
    static references = {};

    /* The controllers that will be used in the app. */
    static controllers = [HomeController];

    /* Define which DataSource to use */
    static defaultDataSource() {
        /* Firebase initialization */
        firebase.initializeApp({
            apiKey: "AIzaSyAKm86MJ6QSjIjZswIplyLftQ-F0m_Vfvs",
            authDomain: "databinding-test.firebaseapp.com",
            databaseURL: "https://databinding-test.firebaseio.com",
            storageBucket: "databinding-test.appspot.com",
            messagingSenderId: "151696334136"
        });
        return new FirebaseDataSource('/', {});
    }

    /**
     *  Called before the App is constructed and before the basic components (Router, Famous Context, Controllers,
     *  DataSource) have loaded.
     */
    static initialize(){
        /* Change initial route, view animation or something needed before we start */
        provide(DataSource)(App.defaultDataSource);
        this.start();
    }

    /**
     * Called after the Router, Famous Context, and Controllers have been instantiated,
     * but before any Controller method is executed by the Router.
     */
    static loaded(){
        /* Instantiate things you need before the router is executed here. For example:
         *
         * this.references.menu = Injection.get(Menu); */
    }

    /**
     * Called by super class after all components (routing, controllers, views, etc.) have been loaded and the
     * app is up and running.
     */
    static done(){
    }
}

document.addEventListener('deviceready', App.initialize.bind(App));