import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {TextButton}         from 'arva-kit/buttons/TextButton.js';


export class LoginRegisterButtonsView extends View {

    // Login Button
    @layout.dock.left()
    @layout.stick.top()
    @layout.size((size) => size * 0.5 - 16, 48)
    loginButton = new TextButton({ content: 'Inloggen', enableBorder: true });

    // Register Button
    @layout.stick.top()
    @layout.dock.right()
    @layout.size((size) => size * 0.5, 48)
    registerButton = new TextButton({ content: 'Registreren', enableBorder: true });

}