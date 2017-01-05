import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {Dropdown}               from 'arva-kit/input/Dropdown.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';


@layout.scrollable()
@layout.translate(0, 0, 10)
export class EditProfileContentView extends View {

    /* Background surface so the user is always able to scroll, not only when he is hovering over an inputfield*/
    @layout.fullSize()
    @layout.translate(0, 0, 0)
    background = new Surface();

    /* START MAIN DATA*/

    /* Label: title*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(~20, ~5)
    title = new UISmallGray({
        content: localize`Title`
    });

    /* Dropdown: title*/
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined,~50)
    titleDropdown = new Dropdown({
        items: [
            {
                text: localize`Mr.`,
                selected: true,
                data: 1
            },
            {
                text: localize`Mrs.`,
                selected: false,
                data: 2
            }]
    });

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    firstName = new LabeledTextInput({usesFeedback: true, value: 'Olivier', label: localize`First name`, required: true, placeholder: localize`Enter your firstname`});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    infixName = new LabeledTextInput({label: localize`Infix`, required: false, placeholder: localize`Possible infix`});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    lastName = new LabeledTextInput({usesFeedback: true, value: 'Janssen', label: localize`Last name`, required: true, placeholder: localize`Enter your lastname`});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    phoneNumber = new LabeledTextInput({usesFeedback: true,  label: localize`Phone number`, required: true, placeholder: localize`Enter your phone number`});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    email = new LabeledTextInput({usesFeedback: true, value: 'Olivier@bizboard.nl', label: 'Email', required: true, placeholder: localize`Enter your email`});

    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
    register = new TextButton({ content: localize`Register`, enableBorder: true , enabled: false});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancel = new TextButton({ content: localize`Cancel`, enableBorder: true });

    /* END MAIN DATA*/

    /* START ORDER DATA*/




}
