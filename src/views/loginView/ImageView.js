import Surface              from 'famous/core/Surface.js';
import BkImageSurface       from 'famous-bkimagesurface/BkImageSurface.js';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {UISmallGray}        from 'arva-kit/text/UISmallGray.js';
import {Colors}             from 'arva-kit/defaults/DefaultColors.js';
import {localize}           from 'mrbox-shared/utils/Localization.js';
import {TypeFaces}          from 'arva-kit/defaults/DefaultTypefaces.js';


import MrBox                from './MrBox.png';

export class ImageView extends View {

    //TODO fix current picture solution
    // Background surface that corresponds with image
    @layout.fullSize()
    @layout.translate(0, 0, -10)
    background = new Surface({properties: {backgroundColor: '#efedef'}});

    // Text surface: "mrBox"
    @layout.dock.top()
    @layout.stick.center()
    @layout.size(100, 44)
    pageTitle = new Surface({
        content: 'mrBox',
        properties: {
            color: Colors.PrimaryUIColor,
            fontSize: TypeFaces.ImpactBig.fontSize
        }
    });

    // Text surface: "je spullen in de cloud"
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(138, 15)
    @layout.stick.center()
    pageSubTitle = new UISmallGray({
        content:  localize`your stuff <span style="font: inherit; color: inherit; font-style: italic">in the cloud</span>`
    });

    // Image surface
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.stick.center()
    @layout.size(undefined, 300)
    image = new BkImageSurface({ content: MrBox });
}
