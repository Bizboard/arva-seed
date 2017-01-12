/* To test this view, insert firebase.auth().signInWithEmailAndPassword('karl@gmail.com', 'karl1234')*/

import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {ListView}               from 'arva-kit/list/ListView';
import {UITitle}                from 'arva-kit/text/UITitle.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {SolidTextButton}        from "arva-kit/buttons/SolidTextButton";
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LightGray, Gray}        from 'arva-kit/defaults/DefaultColors.js';

import {ArticleCard}            from '../../../components/ArticleCard.js';

@layout.columnDockPadding(720, [32, 16, 0, 16])
export class InvoiceDetailView extends View {

    @layout.fullSize()
    @layout.translate(0, 0, -10)
    background = new Surface({
        properties: {
            backgroundColor: LightGray
        }
    });

    @layout.dock.top()
    @layout.size(345, 32)
    header = new ImpactBig({ content: localize`Items`});

    constructor(options = {}) {
        super(options);
        this.options.invoices.once('value', () => {

            let products = this.options.invoices[0].products;
            /* Variable that stores the total price of all articles */
            let totalPrice = 0;
            for (let index in products) {
                totalPrice += products[index].price;
                this.addRenderable(new ArticleCard({
                    leftText: products[index].description,
                    rightText: `€${products[index].price},00`,
                    smallText: products[index].type
                }), products[index].description, layout.dock.top(), layout.dockSpace(16), layout.size(undefined, 75));
            }

            this.addRenderable(new Surface({
                properties: {backgroundColor: Gray}
            }), 'line', layout.dock.top(), layout.dockSpace(32), layout.size(undefined, 1));

            this.addRenderable(new UITitle({
                content: localize`Total`
            }), 'total', layout.dock.top(), layout.dockSpace(16), layout.size(undefined, 19));

            this.addRenderable(new UITitle({
                content: `€${totalPrice}.00`
            }), 'amount', layout.dock.top(), layout.stick.right(), layout.dockSpace(4), layout.size(~80, 19));

            this.addRenderable(new SolidTextButton({
                content: localize`Pay now`
            }), 'pay', layout.dock.top(), layout.dockSpace(16), layout.size(undefined, 48));

            this.addRenderable(new TextButton({
                content: localize`Download PDF`
            }), 'pdf', layout.dock.top(), layout.dockSpace(16), layout.size(undefined, 48));

        })
    }
}
