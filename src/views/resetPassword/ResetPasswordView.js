import BkImageSurface           from 'famous-bkimagesurface/BkImageSurface.js';

import {View}                   from 'arva-js/core/View.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js';
import {SolidTextButton}        from 'arva-kit/buttons/SolidTextButton.js';
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';

import MrBoxLogo                from '../../resources/MrBoxLogo.svg';
import {LabeledTextInput}       from '../../components/LabeledTextInput.js';

@layout.columnDockPadding(720, [0, 16, 0, 16])
export class ResetPasswordView extends View {

    /* Background Image Surface: MrBoxLogo*/
    @layout.translate(0, 0, -10)
    @layout.fullSize()
    backgroundimage = new BkImageSurface({
        content: MrBoxLogo
    });

    /* Header: Forgot password*/
    @layout.dock.top()
    @layout.size(345, 32)
    /*
     TODO fix distance to top: I've tried dockpadding & dockspace
     @layout.dockSpace(128)
     */
    @layout.dockPadding(64, 0, 0, 0)
    login = new ImpactBig({ content: localize`Forgot password`});

    /* Label button view: email*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined,true)
    emailLabelInput = new LabeledTextInput({content: 'Email', required: true, placeholder: localize`Enter your email`, password: false });

    /* Request password button*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
    requestPasswordButton = new SolidTextButton({ content: localize`Request a new password`, enableBorder: true , enabled: false});

    /* Cancel Button*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancelButton = new TextButton({ content: localize`Cancel`, enableBorder: true });

}
