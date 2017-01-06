import {View}                   from 'arva-js/core/View.js';
import {TextButton}             from "arva-kit/buttons/TextButton";
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';

export class LabeledTextButton extends View {

    /* Label*/
    @layout.dock.top()
    @layout.size(~300, ~14)
    label = new UISmallGray({
        content: this.options.label,
        properties: {
            /* Prevent line-breaks from happening */
            whiteSpace: 'nowrap'
        }
    });

    /* Text button*/
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, 48)
    cancel = new TextButton(this.options);
    
}