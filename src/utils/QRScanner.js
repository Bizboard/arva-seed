/**
 * Created by lundfall on 06/01/2017.
 */

export class QRScanner {

    static _canScan() {
        if(window.cordova && window.cordova.plugins && window.cordova.plugins.barcodeScanner){
            return true;
        } else {
            console.log(`It doesn't seem like the QR code scanner plugin is installed. You can install it by using cordova plugin add phonegap-plugin-barcodescanner --variable CAMERA_USAGE_DESCRIPTION="To scan barcodes" --save`);
        }
    }

    

    static scan() {
        if(!this._canScan()){
            return Promise.reject(`plugin doesn't exist`);
        }
        return new Promise((resolve, reject) => {
            cordova.plugins.barcodeScanner.scan(resolve, reject,
                {
                    "prompt" : "Scan QR code test", // supported on Android only
                    "formats" : "QR_CODE" // default: all but PDF_417 and RSS_EXPANDED
                }
            );
        });
    }

}