import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';

@layout.columnDockPadding(720, [32, 16, 0, 16])
export class SettingsView extends View {

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



}