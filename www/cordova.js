/* Just a dummy file to allow for in-browser development, will be replaced in app builds by running 'cordova build' */
if (!window.cordovaDummyInitialized) {

    try {
        var throwsErrorOnIE = new CustomEvent('deviceready');
    } catch (error) {
        /* Polyfill CustomEvent for IE */
        function CustomEvent(event, params) {
            params = params || {bubbles: false, cancelable: false, detail: undefined};
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        }

        CustomEvent.prototype = window.Event.prototype;
        window.CustomEvent = CustomEvent;
    }

    var existingOnload = window.onload || function () {};

    window.onload = function () {
        existingOnload();

        /* Emulate Cordova behaviour for in-browser testing */
        document.dispatchEvent(new CustomEvent('deviceready'));
    };

    window.cordovaDummyInitialized = true;

    window.cordova = {platformId: 'browser'};
}
