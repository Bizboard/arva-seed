import {View}               from 'arva-js/core/View.js';
import {CrossIcon}          from 'arva-kit/icons/CrossIcon.js';
import {IconButton}         from "arva-kit/buttons/IconButton";
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {TextButton}         from 'arva-kit/buttons/TextButton.js';
import {localize}           from 'mrbox-shared/utils/Localization.js';

export class IconTextButton extends View {

    /* Login Button*/
    @layout.dock.left()
    @layout.stick.top()
    @layout.size((size) => size * 0.84 - 16, 48)
    textButton = new TextButton(this.options);


    // TODO Fix icon so it's centered within the button
    /* Register Button*/
    @layout.stick.top()
    @layout.dock.right()
    @layout.size((size) => size * 0.16, 48)
    crossIcon = new IconButton({
        icon: CrossIcon,
        enableBorder: true
    });

}