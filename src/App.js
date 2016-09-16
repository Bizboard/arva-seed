import 'babel-polyfill';
import 'arva-js/utils/hotfixes/IESupport.js';

import firebase                     from 'firebase';

import {FirebaseDataSource}         from 'arva-js/data/datasources/FirebaseDataSource.js';
import {App as ArvaApp}             from 'arva-js/core/App.js';
import {Router}                     from 'arva-js/core/Router.js';
import {provide}                    from 'arva-js/utils/di/Decorators.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {DataSource}                 from 'arva-js/data/DataSource.js';
import {DialogManager}              from 'arva-js/utils/DialogManager.js';

import {setColors}                  from 'arva-kit/defaults/DefaultColors.js';
import {useTypefaces}               from 'arva-kit/defaults/DefaultTypefaces.js';
import {NavigationDrawer}           from 'arva-kit/menus/navigationDrawer/NavigationDrawer.js';
import {ImageSideMenuView}          from 'arva-kit/menus/navigationDrawer/sideMenus/ImageSideMenuView.js';

import {AccountIcon}                from 'arva-kit/icons/AccountIcon.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import './famous.css';
import './fonts.css';

/* Here we import all controllers we want to use in the app */
import {HomeController}             from './controllers/HomeController.js';

export class App extends ArvaApp {

    /* References to Dependency Injection created App and Controller instances, so they are not garbage collected. */
    static references = {};

    /* The controllers that will be used in the app. */
    static controllers = [HomeController];


    /* Define which DataSource to use */
    static defaultDataSource() {
        /* Firebase initialization */
        firebase.initializeApp({
            apiKey: '<api-key>',
            authDomain: '<subdomain>.firebaseapp.com',
            databaseURL: 'https://<subdomain>.firebaseio.com',
            storageBucket: '<subdomain>.appspot.com'
        });
        return new FirebaseDataSource('/', {});
    }

    /**
     *  Called before the App is constructed and before the basic components (Router, Famous Context, Controllers,
     *  DataSource) have loaded.
     */
    static initialize() {
        /* Change initial route, view animation or something needed before we start */
        provide(DataSource)(App.defaultDataSource);

        useTypefaces({TextBody: {fontSize: '14px', fontFamily: 'avenir-light'}});

        setColors({
            PrimaryUIColor: '#4d616e',
            SecondaryUIColor: 'blue',
            QuaternaryUIColor: 'orange'
        });
        this.start();
    }

    /**
     * Called after the Router, Famous Context, and Controllers have been instantiated,
     * but before any Controller method is executed by the Router.
     */
    static loaded() {
        /* Instantiate things you need before the router is executed here. For example:
         *
         * this.references.menu = Injection.get(Menu); */

        /* Set default controller and method */
        Injection.get(Router).setDefault('Home', 'Index');

        /* Set default controller specifications */
        Injection.get(Router).setControllerSpecs({});

        let dialogManager = Injection.get(DialogManager);
        let menu = Injection.get(NavigationDrawer, {
            topBarHeight: 48,
            topMenuOptions: {
                defaultTitle: 'Arva Application',
                rightIconSize: 24
            },
            sideMenu: {
                viewClass: ImageSideMenuView,
                image: 'https://www.bizboard.nl/img/tauro.jpg',
                menuItems: [{
                    icon: AccountIcon,
                    text: 'Menu item 1'
                }]
            }
        });

        menu.setNavigationDrawerEnabled(true);
        menu.on('rightButtonClick', ()=> {});

        Object.assign(this.references, {menu, dialogManager});

    }

    /**
     * Called by super class after all components (routing, controllers, views, etc.) have been loaded and the
     * app is up and running.
     */
    static done() {
    }
}

document.addEventListener('deviceready', App.initialize.bind(App));