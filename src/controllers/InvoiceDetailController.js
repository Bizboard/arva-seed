import {Controller}                 from 'arva-js/core/Controller.js';
import {Invoices}                   from 'mrbox-shared/models/Invoices.js';
import {InvoiceDetailView}          from '../views/profileViews/invoiceDetail/InvoiceDetailView.js';

export class InvoiceDetailController extends Controller {
    Index(){
        if(!this.invoiceDetailView) {
            // TODO Use injection here so the current user that's logged in is being used.
            let invoices = new Invoices('dSYBInRDGJZgrFWf42u6d4pKYos1');
            this.invoiceDetailView = new InvoiceDetailView({invoices: invoices});
        }
        return this.invoiceDetailView;
    }
}