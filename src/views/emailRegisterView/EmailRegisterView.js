import BkImageSurface               from 'famous-bkimagesurface/BkImageSurface.js';

import {View}                       from 'arva-js/core/View.js';
import {layout, event}              from 'arva-js/layout/Decorators.js';
import {ContentEmailRegisterView}   from './ContentEmailRegisterView.js';

// Todo Import a picture with opacity already set
import MrBoxLogo                    from '../../resources/MrBoxLogo.svg';

@layout.columnDockPadding(720, [0, 16, 0, 16])
export class EmailRegisterView extends View {

    // Background Image Surface: MrBoxLogo
    @layout.fullSize()
    @layout.translate(0, 0, -10)
    backgroundimage = new BkImageSurface({
        content: MrBoxLogo
    });

    @layout.dock.top()
    @layout.dockPadding(64, 0, 32, 0)
    contentEmailRegister = new ContentEmailRegisterView();

}
