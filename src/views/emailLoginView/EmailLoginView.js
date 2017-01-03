import Surface                  from 'famous/core/Surface.js';
import BkImageSurface           from 'famous-bkimagesurface/BkImageSurface.js';

import {View}                   from 'arva-js/core/View.js';
import {LabelButtonView}        from './LabelButtonView.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js'
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';
import {SingleLineTextInput}    from 'arva-kit/input/SingleLineTextInput.js';

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
    @layout.size(true, true)
    // TODO fix distance to top: I've tried dockpadding & dockspace
    @layout.dockPadding(0, 64, 0, 0)
    login = new Surface({
        content: 'Inloggen',
        properties: {
            fontSize: TypeFaces.ImpactBig.fontSize,
            fontWeight: 'bold',
            color: Colors.Black
        }
    });

    // TODO fix importing LabelButtonView correctly
    // @layout.dock.top()
    // @layout.dockSpace(64)
    // email = new LabelButtonView({content: 'Email', placeholder: 'Vul je emailadres in', password: false });


    // @layout.dock.top()
    // @layout.dockSpace(16)
    // password = new LabelButtonView({content: 'Password', placeholder: 'Vul je wachtwoord in', password: true });

    // Label: Email
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(true, true)
    email = new UISmallGray({
        content: 'Email'
    });

    // Email input
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, 48)
    emailinput = new SingleLineTextInput({placeholder: 'Vul je emailadres in', required: true, password: true});

    // Label: Password
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(true, true)
    password = new UISmallGray({
        content: 'Wachtwoord'
    });

    // Password input
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, 48)
    passwordinput = new SingleLineTextInput({placeholder: 'Vul je wachtwoord in', required: true});

    // Login button
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
        //TODO fix the style for un-enabled textbutton
    loginButton = new TextButton({ content: 'Log in', enableBorder: true , enabled: false});

    // Forgot password button
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    forgotPasswordButton = new TextButton({ content: 'Wachtwoord vergeten', enableBorder: true });

    // Login Button
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancelButton = new TextButton({ content: 'Annuleren', enableBorder: true });

}
