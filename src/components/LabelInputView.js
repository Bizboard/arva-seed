import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {SingleLineTextInput}    from 'arva-kit/input/SingleLineTextInput.js';

export class LabelInputView extends View {

    // Label
    @layout.dock.top()
    @layout.size(~100, ~14)
    label = new UISmallGray({
        content: this.options.content
    });

    // input
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, 48)
    input = new SingleLineTextInput({...this.options});

}