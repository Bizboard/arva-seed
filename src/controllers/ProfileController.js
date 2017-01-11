import {Controller}                 from 'arva-js/core/Controller.js';
import {Injection}                  from 'arva-js/utils/Injection.js';
import {Invoices}                   from 'mrbox-shared/models/Invoices.js';
import {Consumer}                   from 'mrbox-shared/models/Consumers.js';

import {InvoiceView}                from '../views/profileViews/invoice/InvoiceView.js';
import {ProfileView}                from '../views/profileViews/profile/ProfileView.js';
import {SettingsView}               from '../views/profileViews/settings/SettingsView.js';
import {EditProfileView}            from '../views/profileViews/editProfile/EditProfileView.js';
import {EditPasswordView}           from '../views/profileViews/editPassword/EditPasswordView.js';
import {InvoiceDetailView}          from '../views/profileViews/invoiceDetail/InvoiceDetailView.js';

export class ProfileController extends Controller {
    constructor() {
        super(...arguments);

        this._setConsumer();

        this.router.on('loginchange', () => {
            this.profileView = null;
            this.settingsView = null;
            this.editProfileView = null;
            this.editpasswordView = null;
            this.invoiceView = null;
            this.invoiceDetailView = null;

            this._setConsumer();
        });
    }

    Index(){
        if(!this.profileView) {
            this.profileView = new ProfileView({consumer: this.consumer});
        }
        return this.profileView;

    }
    Settings(){
        if(!this.settingsView) {
            this.settingsView = new SettingsView();
        }
        return this.settingsView;
    }
    EditProfile(){
        if(!this.editProfileView) {
            this.editProfileView = new EditProfileView();
        }
        return this.editProfileView;
    }
    EditPassword(){
        if(!this.editpasswordView) {
            this.editpasswordView = new EditPasswordView();
        }
        return this.editpasswordView;
    }
    Invoice(){
        if(!this.invoiceView) {
            // TODO Use injection here so the current user that's logged in is being used.
            let invoices = new Invoices('dSYBInRDGJZgrFWf42u6d4pKYos1');
            this.invoiceView = new InvoiceView({invoices: invoices});
        }
        return this.invoiceView;
    }
    InvoiceDetail(){
        if(!this.invoiceDetailView) {
            // TODO Use injection here so the current user that's logged in is being used.
            let invoices = new Invoices('dSYBInRDGJZgrFWf42u6d4pKYos1');
            this.invoiceDetailView = new InvoiceDetailView({invoices: invoices});
        }
        return this.invoiceDetailView;
    }

    _setConsumer() {
        let user = this.router.getUser();
        this.consumer = Injection.get(Consumer, user.uid);
    }
}