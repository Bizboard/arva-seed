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

    // @layout.dock.top()
    // @layout.size(undefined, 75)
    // @layout.dockSpace(32)
    // firstArticle = new ArticleCard({leftText: 'Oma\'s spullen', rightText: '€10,00', smallText:  'Volle mrBOX XL'});

    @layout.fullSize()
    @layout.dock.top()
    @layout.dockSpace(32)
    articleList = new ListView({
        spacing: true,
        scrollViewOptions: {
            itemTemplate: (data) => {
                @layout.dockSpace(32)
                class listItem extends View {
                    @layout.dock.top()
                    @layout.size(undefined, 75)
                    item = new ArticleCard({leftText: data.description, rightText: data.price, smallText: data.type});
                }
                return new listItem();
            }
        },
        dataStore: this.options.invoices[0].products
        // dataMapper: (data) => ({
        //     text: data.timestamp,
        //     previewText: data.description
        // })
    });


}
