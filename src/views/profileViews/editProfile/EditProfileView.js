import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig';
import {Dropdown}               from 'arva-kit/input/Dropdown.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {SolidTextButton}        from "arva-kit/buttons/SolidTextButton";
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';

import {IconTextButton}         from "../../../components/IconTextButton";
import {LabeledTextButton}      from "../../../components/LabeledTextButton";

@layout.scrollable()
@layout.columnDockPadding(720, [32, 16, 32, 16])
export class EditProfileView extends View {

    /* Background surface so the user is always able to scroll, not only when he is hovering over an inputfield*/
    @layout.fullSize()
    @layout.translate(0, 0, -10)
    background = new Surface();

    /* START MAIN DATA*/

    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(~20, ~5)
    title = new UISmallGray({
        content: localize`Title`
    });

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

    /* END MAIN DATA*/

    /* START ORDER DATA*/

    @layout.dock.top()
    @layout.size(132, 32)
    @layout.dockSpace(32)
    orders = new ImpactBig({content: localize`Orders`});

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    bankAccount = new LabeledTextButton({ label: localize`Bank account details`, content: 'NL51 INGB **** **** 00', enableBorder: true });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    billingAddress = new LabeledTextButton({ label: localize`Billing address`, content: 'Prinsengracht 7', enableBorder: true });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(~20, ~5)
    shippingAddresses = new UISmallGray({
        content: localize`Shipping addresses`
    });

    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, 48)
    Address1 = new IconTextButton({ content: 'Prinsengracht 7', enableBorder: true });

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    Address2 = new IconTextButton({ content: 'Dam 1', enableBorder: true });

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    addShippingAddress = new TextButton({ content: localize`Add a shipping address`, enableBorder: true });

    /* END ORDER DATA*/

    /* START BUSINESS DATA*/

    @layout.dock.top()
    @layout.size(132, 32)
    @layout.dockSpace(32)
    business = new ImpactBig({content: localize`Business`});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    chamberOfCommerceNo = new LabeledTextInput({ label: localize`Chamber of commerce number`, required: true, placeholder: localize`Enter your chamber of commerce number`});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    vatID = new LabeledTextInput({ label: localize`VAT ID`, required: true, placeholder: localize`Enter your VAT ID`});

    /* END BUSINESS DATA*/

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    saveChanges = new SolidTextButton({ content: localize`Save changes`, enableBorder: true });

}
