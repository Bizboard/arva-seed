import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {Dropdown}               from 'arva-kit/input/Dropdown.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js'
import {LabelInputView}         from '../../components/LabelInputView.js';
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';

@layout.scrollable()
export class ContentEmailRegisterView extends View {

    // Background surface so the user is always able to scroll, not only when he is hovering over an inputfield
    @layout.fullSize()
    @layout.translate(0, 0, -10)
    background = new Surface();

    // Header: Register
    @layout.dock.top()
    @layout.size(132, 32)
    register = new ImpactBig({ content: 'Registreren' });

    // Label: title
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(~20, ~5)
    label = new UISmallGray({
        content: 'Aanhef'
    });

    // Dropdown: title
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined,~50)
    titleDropdown = new Dropdown({
        placeholder: 'Kies je aanhef',
        items: [
            {
                text: 'Dhr.',
                selected: false,
                data: 1
            },
            {
                text: 'Mevr.',
                selected: false,
                data: 2
            }]
    });

    // Label button view: first name
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    firstNameLabelInput = new LabelInputView({content: 'Voornaam', required: true, placeholder: 'Vul je voornaam in', password: false });

    // Label button view: infix
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    infixNameLabelInput = new LabelInputView({content: 'Tussenvoegsel', required: false, placeholder: 'Evt. tussenvoegsel', password: false });

    // Label button view: last name
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    lastNameLabelInput = new LabelInputView({content: 'Achternaam', required: true, placeholder: 'Vul je achternaam in', password: false });

    // Label button view: email
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    emailLabelInput = new LabelInputView({content: 'Email', required: true, placeholder: 'Vul je email adres in', password: false });

    // Label button view: password
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    passwordLabelInput = new LabelInputView({content: 'Wachtwoord', required: true, placeholder: 'Vul een wachtwoord in', password: true });

    // Label button view: repeat password
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    repeatPasswordLabelInput = new LabelInputView({content: 'Wachtwoord herhalen', required: true, placeholder: 'Herhaal je wachtwoord', password: true });

    // Register button
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
    registerButton = new TextButton({ content: 'Registreer', enableBorder: true , enabled: false});

    // Cancel button
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancelButton = new TextButton({ content: 'Annuleren', enableBorder: true });


}
