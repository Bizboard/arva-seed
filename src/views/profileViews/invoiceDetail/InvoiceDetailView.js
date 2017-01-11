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

    // constructor(options = {}) {
    //     super(options);
    //
    //     for(let product of this.options.invoices[0].products) {
    //         this.addRenderable(new ArticleCard({
    //             leftText: product.description,
    //             rightText: product.price,
    //             smallText: product.type
    //         }), product.description, layout.dock.top() @layout.size(undefined, 75));
    //     }
    // }

}
