/**
 * Created by lundfall on 05/01/2017.
 */

import {Controller}       from 'arva-js/core/Controller.js';
import {PictureSelector}  from 'arva-kit/utils/pictureSelector/PictureSelector.js'
import {Injection}        from 'arva-js/utils/Injection.js';
import {DataSource}       from 'arva-js/data/DataSource.js';
import {DialogManager}    from 'arva-js/utils/DialogManager.js';
import {OneButtonDialog}  from 'arva-kit/dialogs/OneButtonDialog.js';

import {QRScanner}        from '../utils/QRScanner.js';
import {BoxPictures}      from '../models/BoxPicture.js';
import {DemoView}         from '../views/demo/DemoView.js';

export class DemoController extends Controller {


    constructor() {
        super(...arguments);
        this._dataSource = Injection.get(DataSource);
        this._dialogManager = Injection.get(DialogManager);

    }

    async Index() {
        let auth = await this._dataSource.getAuth();
        this._boxPictures = Injection.get(BoxPictures, auth.uid);
        this.demoView = new DemoView({email: auth.providerData[0].email, uid: auth.uid});
        this.demoView.on('getCameraPicture', this._addCameraPicture);
        this.demoView.on('getLibraryPicture', this._addLibraryPicture);
        this.demoView.on('scanQR', this._scanQRCode);
        this.demoView.on('logout', () => {
            this._dataSource.unauth().then(() => {
                this.router.go('Login', 'Index');
            });
        });
        return this.demoView;
    }

    async _addLibraryPicture() {
        let pictureUrl = await PictureSelector.getLibraryPicture();
        this._addPictureFromUrl(pictureUrl);
    }

    async _scanQRCode() {
        let result = await QRScanner.scan();
        console.log(result);
        await this._dialogManager.show({
            dialog: new OneButtonDialog({
                body: `Successfully scanned box ${result.text}`, button: {buttonText: 'Ok'}
            })
        });
    }

    async _addCameraPicture() {
        let pictureUrl = await PictureSelector.getCameraPicture();
        this._addPictureFromUrl(pictureUrl);
    }

    async _addPictureFromUrl(pictureUrl) {
        this._boxPictures.add({
            url: pictureUrl
        });
    }
}
