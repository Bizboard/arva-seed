import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';

@layout.columnDockPadding(720, [32, 16, 0, 16])
export class EditPasswordView extends View {

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    oldPassword = new LabeledTextInput({label: localize`Old password`, required: true, placeholder: localize`Enter your old password`, usesFeedback: true});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    newPassword = new LabeledTextInput({label: localize`New password`, required: true, placeholder: localize`Enter your new password`, usesFeedback: true});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined,true)
    repeatNewPassword = new LabeledTextInput({label: localize`Again`, required: true, placeholder: localize`Repeat your new password`, usesFeedback: true});

}
