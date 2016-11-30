/**
 * Created by lundfall on 16/11/2016.
 */

let buckarooEnvironments = {
    test: 'https://testcheckout.buckaroo.nl/html/',
    live: 'https://checkout.buckaroo.nl/html/'
};

let postRequestFunctionStringified = `function post(path, params, method) {
         method = method || "post"; // Set method to post by default if not specified.

         // The rest of this code assumes you are not using a library.
         // It can be made less wordy if you use one.
         var form = document.createElement("form");
         form.setAttribute("method", method);
         form.setAttribute("action", path);

         for(var key in params) {
         if(params.hasOwnProperty(key)) {
         var hiddenField = document.createElement("input");
         hiddenField.setAttribute("type", "hidden");
         hiddenField.setAttribute("name", key);
         hiddenField.setAttribute("value", params[key]);

         form.appendChild(hiddenField);
         }
         }

         document.body.appendChild(form);
         form.submit();
         }
         `

export class ExternalEnvironment {

    constructor() {
        if (!window.cordova || !window.cordova.InAppBrowser) {
            console.log("Error: It seems like the inappbrowser plugin isn't installed");
        }
        if (!window.device || window.device.platform) {
            console.log("Error: It seems like the cordova-plugin-device isn't installed");
        }
    }

    /**
     * Opening an electronic mandate page, based on the url provided
     * @param {String} url
     * @returns {*}
     */
    async openElectronicMandate(url) {
        this._ensureThisEnvironmentOnly();
        /* Open an empty browser and perform POST request */
        return this._openInAppBrowser(url);
    }


    async openBuckarooPayment(htmlPostRequest, inTestEnvironment = false) {
        this._ensureThisEnvironmentOnly();
        /* Open an empty browser and perform POST request */
        let browserOpenPromise =  this._openInAppBrowser('about:blank');
        this._doPostRequestInBrowser(htmlPostRequest, buckarooEnvironments[inTestEnvironment ? 'test' : 'live']);
        return browserOpenPromise;
    }

    _openInAppBrowser(url){
        if (device.platform === "Android") {
            this._inAppBrowserRef = cordova.InAppBrowser.open(url, '_blank', 'location=no,clearcache=yes,hardwareback=no,zoom=no');
        } else {
            this._inAppBrowserRef = cordova.InAppBrowser.open(url, '_blank', 'location=no,clearcache=yes,closebuttoncaption=Go back to App,toolbar=yes,presentationstyle=formsheet');
        }
        /* Check whether payment has finished processing */
        return new Promise((resolve, reject) => {


            let cleanUp = () => {
                clearInterval(this._environmentIsActiveChecker);
                this._environmentIsActiveChecker = null;
            };

            this._closeCurrentEnvironment = () => {
                if(this._environmentIsActiveChecker){
                    this._inAppBrowserRef.close();
                    this._closeCurrentEnvironment = null;
                    resolve();
                }
            };

            this._inAppBrowserRef.addEventListener('exit', () => {
                cleanUp();
                reject('Browser closed by user');
            });

            this._environmentIsActiveChecker = setInterval(() => {
                console.log("Checking if payment finished...");
                this._inAppBrowserRef.executeScript({code: 'window.paymentFinished'},
                    ([isPaymentFinished]) => {
                        if (isPaymentFinished) {
                            this._inAppBrowserRef.close();
                            resolve();
                        }
                    });
            }, 500);
        });
    }

    _doPostRequestInBrowser(htmlPostRequest, url) {
        /* The code needs to be in a string. It executes a post request by injecting form data into the DOM */
        let doPostRequestScript = postRequestFunctionStringified;
        /* Assign the request object */
        doPostRequestScript += `var requestObject = ${JSON.stringify(htmlPostRequest)};
        `

        /* Execute the POST request */
        doPostRequestScript += `post('${url}', requestObject);`;

        this._inAppBrowserRef.executeScript({code: doPostRequestScript});
    }

    _ensureThisEnvironmentOnly() {
        if (this._environmentIsActiveChecker) {
            throw new Error("There is already an active payment in progress");
        }
    }



    closeIfOpen() {
        if(this._closeCurrentEnvironment){
            this._closeCurrentEnvironment()
            return true;
        }
        return false;
    }
}