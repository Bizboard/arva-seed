import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js'
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';
import {SingleLineTextInput}    from 'arva-kit/input/SingleLineTextInput.js';
import BkImageSurface           from 'famous-bkimagesurface/BkImageSurface.js';

import MrBoxLogo                from './MrBoxLogo.svg';

@layout.columnDockPadding(720, [0, 16, 0, 16])
export class EmailLoginView extends View {

    // Background Image Surface: MrBoxLogo
    @layout.translate(0, 0, -10)
    @layout.fullSize()
    backgroundimage = new BkImageSurface({
        content: MrBoxLogo
    });

    // Header: Login
    @layout.dock.top()
    @layout.size(~100, ~25)
    login = new Surface({
        content: 'Inloggen',
        properties: {
            fontSize: TypeFaces.ImpactBig.fontSize,
            fontWeight: 'bold',
            color: Colors.Black
        }
    });

    // Label: Email
    @layout.dockSpace(64)
    @layout.size(~50, ~25)
    @layout.dock.top()
    email = new UISmallGray({
        content: 'Email'
    });

    // @layout.dockSpace(4)
    // @layout.size(~300, ~50)
    // @layout.dock.top()
    // emailinput = new Surface({
    //     content: 'Email',
    //     properties: {
    //         fontSize: '14px',
    //         color: 'grey'
    //     }
    // });


}
