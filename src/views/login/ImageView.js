import Surface              from 'famous/core/Surface.js';
import ImageSurface         from 'famous/surfaces/ImageSurface.js';
import BkImageSurface       from 'famous-bkimagesurface/BkImageSurface.js';

import {View}               from 'arva-js/core/View.js';
import {ImpactBig}          from "arva-kit/text/ImpactBig";
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {UISmallGray}        from 'arva-kit/text/UISmallGray.js';
import {Colors}             from 'arva-kit/defaults/DefaultColors.js';
import {localize}           from 'mrbox-shared/utils/Localization.js';

import MrBox                from '../images/MrBox.png';
import background           from '../images/livingroom_background.jpg';
import mrboxMaskot          from '../images/mrbox_maskot.png';

@layout.dockPadding(16)
export class ImageView extends View {

    @layout.size(undefined, 300)
    /*
     Background surface that corresponds with image
     */
    @layout.translate(0, 0, -10)
    background = new BkImageSurface({content: background, sizeMode: BkImageSurface.SizeMode.ASPECTFILL});

    /* Text surface: "mrBox"*/
    @layout.dock.top()
    @layout.stick.center()
    @layout.size(100, 44)
    pageTitle = new ImpactBig({content: 'mrBOX', properties: {color: Colors.PrimaryUIColor, whiteSpace: 'nowrap'}});

    /* Text surface: "je spullen in de cloud"*/
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(138, 15)
    @layout.stick.center()
    pageSubTitle = new UISmallGray({
        content: localize`Your stuff <span style="font: inherit; color: inherit; font-style: italic">in the cloud</span>`
    });

    /* Image surface*/
    @layout.dock.top()
    @layout.dockSpace(30)
    @layout.size((width) => Math.min(width, 150), ~50)
    @layout.stick.center()
    image = new ImageSurface({content: mrboxMaskot});

}
