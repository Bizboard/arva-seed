/* Just a dummy file to allow for in-browser development, will be replaced in app builds by running 'cordova build' */
if(!window.cordovaDummyInitialized){

    var existingOnload = window.onload || function(){};

    window.onload = function(){
        existingOnload();

        /* Emulate Cordova behaviour for in-browser testing */
        document.dispatchEvent(new Event('deviceready'));
    };

    window.cordovaDummyInitialized = true;

    window.cordova = {platformId: 'browser'};
}