import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {TextButton}         from 'arva-kit/buttons/TextButton.js';
import {localize}           from 'mrbox-shared/utils/Localization.js';



export class LoginRegisterButtonsView extends View {

    /* Login Button*/
    @layout.dock.left()
    @layout.stick.top()
    @layout.size((size) => size * 0.5 - 16, 48)
    loginButton = new TextButton({ content: localize`Log in`, enableBorder: true });



    /* Register Button*/
    @layout.stick.top()
    @layout.dock.right()
    @layout.size((size) => size * 0.5, 48)
    registerButton = new TextButton({ content: localize`Register`, enableBorder: true });


}