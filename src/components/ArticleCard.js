import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {ContentCard}            from 'arva-kit/components/ContentCard.js';
import {UIRegular}              from 'arva-kit/text/UIRegular';
import {UISmallGray}            from 'arva-kit/text/UISmallGray';

@layout.dockPadding(16, 16, 16, 16)
export class ArticleCard extends ContentCard {

    @layout.dock.top()
    @layout.stick.left()
    @layout.size((size) => size * 0.8 - 16, 18)
    leftText = new UIRegular({ content: 'Oma\'s spullen'});

    @layout.dock.top()
    @layout.stick.right()
    @layout.dockSpace(-17)
    @layout.size((size) => size * 0.2, 18)
    rightText = new UIRegular({ content: '€10,00'});

    @layout.dock.top()
    @layout.dockSpace(8)
    @layout.size(105, 15)
    smallText = new UISmallGray({ content: 'Volle mrBOX XL'});

}
