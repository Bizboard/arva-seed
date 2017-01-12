import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {ListView}               from 'arva-kit/list/ListView';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LightGray}              from 'arva-kit/defaults/DefaultColors.js';

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
    header = new ImpactBig({ content: 'Artikelen'});

    constructor(options = {}) {
        super(options);
        this.options.invoices.once('value', () => {

            let products = this.options.invoices[0].products
            for (let index in products) {
                console.log(products[index].description);
                this.addRenderable(new ArticleCard({
                    leftText: products[index].description,
                    rightText: products[index].price,
                    smallText: products[index].type
                }), products[index].description, layout.dock.top(), layout.dockSpace(32), layout.size(undefined, 75));
            }

        })
    }
}
