import {View}                       from 'arva-js/core/View.js';
import {layout, event}              from 'arva-js/layout/Decorators.js';

import {ImageView}                  from './ImageView.js'
import {TextButton}                 from 'arva-kit/buttons/TextButton.js';
import {IconButton}                 from 'arva-kit/buttons/IconButton.js';
import {LoginRegisterButtonsView}   from './LoginRegisterButtonsView.js';
import {localize}                   from 'mrbox-shared/utils/Localization.js';

import fbLogo                       from '../images/fblogo.png';

@layout.columnDockPadding(720, [0])
export class LoginView extends View {

    /* Upper part of the screen: Image with the caption: "mr box /n je spullen in de cloud"*/
    @layout.dock.top(true, 0, 10)
    imageView = new ImageView();

    /* Lower part of the screen: 1 facebook-login button and 2 buttons for register & login*/
    @layout.dockSpace(20)
    /*
     TODO Fix the size of the facebook icon + have both text/icon centered
     Button surface: facebook icon combined with text
     */
    @layout.dock.top()
    @layout.stick.center()
    @layout.size((width) => width - 32, 48)
    facebookButton = new IconButton({
        content: localize`Log in with facebook`,
        image: fbLogo,
        clickEventName: 'facebookLogin',
        backgroundProperties: {
            backgroundColor: '#2a5298'
        },
        properties: {
            color: 'white'
        }
    });

    /* Two buttons for register & login*/
    @layout.dock.top()
    @layout.dockSpace(16)
    loginRegisterButtons = new LoginRegisterButtonsView()


}
