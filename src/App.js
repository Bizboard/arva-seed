import 'babel-polyfill';
import 'arva-js/utils/hotfixes/IESupport.js';

import firebase                     from 'firebase';

import {App as ArvaApp}             from 'arva-js/core/App.js';
import {Router}                     from 'arva-js/core/Router.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {DataSource}                 from 'arva-js/data/DataSource.js';
import {provide}                    from 'arva-js/utils/di/Decorators.js';
import {DialogManager}              from 'arva-js/utils/DialogManager.js';
import {setLocale}                  from 'mrbox-shared/utils/Localization.js';
import {FirebaseDataSource}         from 'arva-js/data/datasources/FirebaseDataSource.js';

import {Colors, setColors}          from 'arva-kit/defaults/DefaultColors.js';
import {setTypefaces}               from 'arva-kit/defaults/DefaultTypefaces.js';
import {NavigationDrawer}           from 'arva-kit/menus/navigationDrawer/NavigationDrawer.js';
import {ImageSideMenuView}          from 'arva-kit/menus/navigationDrawer/sideMenus/ImageSideMenuView.js';
import {OneButtonDialog}            from 'arva-kit/dialogs/OneButtonDialog.js';

import {AccountIcon}                from 'arva-kit/icons/AccountIcon.js';

/* Importing CSS in jspm bundled builds injects them into the DOM automagically */
import './famous.css!';
import './fonts.css!';

/* Here we import all controllers we want to use in the app */
import {SettingsController}                 from "./controllers/SettingsController";
import {LoginController}                    from './controllers/LoginController.js';
import {ProfileController}                  from "./controllers/ProfileController.js";
import {EditProfileController}              from "./controllers/EditProfileController";
import {EmailLoginController}               from './controllers/EmailLoginController.js';
import {EmailRegisterController}            from './controllers/EmailRegisterController.js';
import {ResetPasswordController}            from './controllers/ResetPasswordController.js';
import {DemoController}                     from './controllers/DemoController.js';

import sideMenuScene                        from './views/images/sidemenupic.jpg';

export class App extends ArvaApp {

    /* References to Dependency Injection created App and Controller instances, so they are not garbage collected. */
    static references = {};

    /* The controllers that will be used in the
     app. */
    //TODO It's probably better to refactor some of these controllers to merge all login related stuff to the same controller
    static controllers = [LoginController, EmailLoginController, EmailRegisterController, ResetPasswordController, ProfileController, EditProfileController, SettingsController, DemoController];


    /* Define which DataSource to use */
    static defaultDataSource(path = '/', options = {}) {
        /* Firebase initialization */
        if (firebase.apps.length === 0) {
            firebase.initializeApp({
                apiKey: 'AIzaSyBl-UFNia9_0DJbib6_nralN9K8whdfKWY',
                authDomain: 'bizboard-mrbox.firebaseapp.com',
                databaseURL: 'https://bizboard-mrbox.firebaseio.com',
                storageBucket: 'bizboard-mrbox.appspot.com',
                messagingSenderId: '855814959208'
            });
        }
        return new FirebaseDataSource(path, options);
    }

    /**
     *  Called before the App is constructed and before the basic components (Router, Famous Context, Controllers,
     *  DataSource) have loaded.
     */
    static initialize() {
        /* Change initial route, view animation or something needed before we start */
        provide(DataSource)(App.defaultDataSource);

        setColors({
            PrimaryUIColor: 'rgb(119, 19, 105)',
            SecondaryUIColor: 'blue',
            QuaternaryUIColor: 'orange',
            ImageTextColor: 'rgb(51, 51, 51)',
            BasicTextColor: 'rgb(51, 51, 51)'
        });

        setTypefaces({
            TextBody: {fontSize: '14px', fontFamily: 'avenir-light'},
            ImpactBig: {color: Colors.BasicTextColor}
        });

        /* TODO: set locale from system settings */
        setLocale('nl-NL');
        this.start();
    }

    /**
     * Called after the Router, Famous Context, and Controllers have been instantiated,
     * but before any Controller method is executed by the Router.
     */
    static loaded() {
        /* Disable the pushing up of the keyboard */
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            window.cordova.plugins.Keyboard.disableScroll(true);
        }

        /* Instantiate things you need before the router is executed here. For example:
         *
         * this.references.menu = Injection.get(Menu); */


        let router = Injection.get(Router);
        /* Set default controller and method */
        router.setDefault('Login', 'Index');


        /* Set default controller specifications */


        Injection.get(Router).setControllerSpecs({});
        let dialogManager = Injection.get(DialogManager);

        let navigationDrawer = Injection.get(NavigationDrawer, {
            topMenuOptions: {defaultTitle: 'Arva Application'},
            showInitial: false,
            hideOnRoutes: [{                         // route's that will auto hide the top & side menu
                controller: 'Login'
            }, {
                controller: 'Email'
            }, {
                controller: 'EmailLogin'
            }, {
                controller: 'EmailRegister'
            }],
            sideMenu: {
                viewClass: ImageSideMenuView,
                image: sideMenuScene,
                menuItems: [{
                    icon: AccountIcon,
                    text: 'mrBOX'
                }]
            }
        });

        navigationDrawer.on('rightButtonClick', () => {
            dialogManager.show({
                dialog: new OneButtonDialog({title: 'Demo Application', button: {buttonText: 'Ok'}})
            })
        });

        navigationDrawer.on('rightButtonClick', ()=> {
        });

        Object.assign(this.references, {navigationDrawer, dialogManager});

    }

    /**
     * Called by super class after all components (routing, controllers, views, etc.) have been loaded and the
     * app is up and running.
     */
    static done() {
    }
}

document.addEventListener('deviceready', App.initialize.bind(App));