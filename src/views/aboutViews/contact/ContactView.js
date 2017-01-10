import ImageSurface             from 'famous/surfaces/ImageSurface.js'

import {View}                   from 'arva-js/core/View.js';
import {UIRegular}              from 'arva-kit/text/UIRegular';
import {HomeIcon}               from 'arva-kit/icons/HomeIcon.js';
import {TextButton}             from "arva-kit/buttons/TextButton";
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {Gray}                   from "arva-kit/defaults/DefaultColors";
import {localize}               from 'mrbox-shared/utils/Localization.js';

import sloganMrBox          from './BackgroundMrBox.png';

@layout.columnDockPadding(720, [0, 16, 0, 16])
export class ContactView extends View {

    @layout.dock.top()
    @layout.size(undefined, 127)
    @layout.stick.center()
    image = new ImageSurface({
        content: sloganMrBox
    });

    @layout.dock.top()
    @layout.dockSpace(8)
    @layout.size(257, 19)
    @layout.stick.center()
    questionsText = new UIRegular({
        content: localize`Do you have any questions?`,
        properties: {
            color: Gray
        }
    });

    @layout.dock.top()
    @layout.dockSpace(8)
    @layout.size(257, 19)
    @layout.stick.center()
    helpText = new UIRegular({
        content: localize`We are ready to help you out!`,
        properties: {
            color: Gray
        }
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    phoneNumber = new TextButton({content: '0800 - 67 26 965', enableBorder: true});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    mrboxEmail = new TextButton({content: 'info@mrbox.com', enableBorder: true});

}