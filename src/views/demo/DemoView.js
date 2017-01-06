/**
 * Created by lundfall on 05/01/2017.
 */

import Surface              from 'famous/core/Surface.js';

import {View}               from 'arva-js/core/View.js';
import {layout}             from 'arva-js/layout/Decorators.js';
import {combineOptions}     from 'arva-js/utils/CombineOptions.js';
import {SolidTextButton}    from 'arva-kit/buttons/SolidTextButton.js';
import {TextButton}         from 'arva-kit/buttons/TextButton.js';
import {TextH2}             from 'arva-kit/text/TextH2.js';

import {localize}           from 'mrbox-shared/utils/Localization.js';

import {ImageList}          from '../../components/ImageList.js';

@layout.dockPadding(16)
@layout.dockSpace(16)
@layout.scrollable()
export class DemoView extends View {

    @layout.fullSize()
    background = new Surface();

    @layout.dock.top(true)
    title = new TextH2({content: localize`${this.options.email}`, properties: {textAlign: 'center', wordWrap: 'break-word'}});

    @layout.dock.top()
    @layout.stick.center()
    @layout.size(undefined, true)
    getCameraPicture = new SolidTextButton({content: localize`Take a picture`, clickEventName: 'getCameraPicture'});
    
    @layout.dock.top()
    @layout.stick.center()
    @layout.size(undefined, true)
    getLibraryPicture = new SolidTextButton({content: localize`Get picture from library `, clickEventName: 'getLibraryPicture'});

    @layout.dock.top()
    @layout.stick.center()
    @layout.size(undefined, true)
    scanQR = new SolidTextButton({content: localize`Scan QR code`, clickEventName: 'scanQR'});

    @layout.dock.top()
    @layout.stick.center()
    @layout.size(undefined, true)
    logout = new TextButton({content: localize`Logout`, clickEventName: 'logout'});

    @layout.dock.top(280)
    pictures = new ImageList({uid: this.options.uid});



    constructor(options = {}) {
        super(combineOptions({
            content: 'hello world'
        }, options));
    }
}