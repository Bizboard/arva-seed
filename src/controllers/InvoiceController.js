import {Controller}                 from 'arva-js/core/Controller.js';
import {Invoices}                   from 'mrbox-shared/models/Invoices.js';
import {InvoiceView}                from '../views/profileViews/invoice/InvoiceView.js';


export class InvoiceController extends Controller {
    Index(){
        if(!this.invoiceView) {
            // TODO Use injection here so the current user that's logged in is being used.
            let invoices = new Invoices('dSYBInRDGJZgrFWf42u6d4pKYos1');
            this.invoiceView = new InvoiceView({invoices: invoices});
        }
        return this.invoiceView;
    }
}