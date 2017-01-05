import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {Dropdown}               from 'arva-kit/input/Dropdown.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js';
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';

import {LabeledTextInput}       from '../../components/LabeledTextInput.js';

@layout.scrollable()
@layout.translate(0, 0, 10)
export class EmailRegisterContentView extends View {

    /* Background surface so the user is always able to scroll, not only when he is hovering over an inputfield*/
    @layout.fullSize()
    @layout.translate(0, 0, 0)
    background = new Surface();

    /* Header: Register*/
    @layout.dock.top()
    @layout.size(132, 32)
    register = new ImpactBig({ content: localize`Register` });

    /* Label: title*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(~20, ~5)
    label = new UISmallGray({
        content: localize`Title`
    });

    /* Dropdown: title*/
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined,~50)
    titleDropdown = new Dropdown({
        placeholder: localize`Choose your title`,
        items: [
            {
                text: localize`Mr.`,
                selected: false,
                data: 1
            },
            {
                text: localize`Mrs.`,
                selected: false,
                data: 2
            }]
    });

    /* Label button view: first name*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    firstNameLabelInput = new LabeledTextInput({content: localize`First name`, required: true, placeholder: localize`Enter your firstname`, password: false });

    /* Label button view: infix*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    infixNameLabelInput = new LabeledTextInput({content: localize`Infix`, required: false, placeholder: localize`Possible infix`, password: false });

    /* Label button view: last name*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    lastNameLabelInput = new LabeledTextInput({content: localize`Last name`, required: true, placeholder: localize`Enter your lastname`, password: false });

    /* Label button view: email*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    emailLabelInput = new LabeledTextInput({content: 'Email', required: true, placeholder: localize`Enter your email`, password: false });

    /* Label button view: password*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    passwordLabelInput = new LabeledTextInput({content: localize`Password`, required: true, placeholder: localize`Enter your password`, password: true });

    // TODO Fix single line 'wachtwoord herhalen'
    /* Label button view: repeat password*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    repeatPasswordLabelInput = new LabeledTextInput({ content: localize`Repeat password`, required: true, placeholder: localize`Repeat your password`, password: true });

    /* Register button*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
    registerButton = new TextButton({ content: localize`Register`, enableBorder: true , enabled: false});

    /* Cancel button*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancelButton = new TextButton({ content: localize`Cancel`, enableBorder: true });


}
