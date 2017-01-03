import {View}                       from 'arva-js/core/View.js';
import {layout, event}              from 'arva-js/layout/Decorators.js';
import {LoginRegisterButtonsView}   from './LoginRegisterButtonsView.js';
import {IconButton}                 from 'arva-kit/buttons/IconButton.js';
import {TextButton}                 from 'arva-kit/buttons/TextButton.js';

@layout.dockPadding(0, 16)
export class ButtonView extends View {

    // TODO Fix the facebook button
    // Button surface: facebook icon combined with text
    @layout.dock.top()
    @layout.stick.center()
    @layout.size(undefined, 48)
    facebookButton = new IconButton({
        content: 'Inloggen met Facebook',
        image: './images/fblogo.png',
        backgroundProperties: {
            backgroundColor: '#2a5298'
        },
        properties: {
            color: 'white'
        }
    });

    // 2 buttons for register & login
    @layout.dock.top()
    @layout.dockSpace(16)
    loginRegisterButtons = new LoginRegisterButtonsView()

}