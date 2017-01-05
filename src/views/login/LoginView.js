import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

import {ImageView}          from './ImageView.js'
import {ButtonView}         from './ButtonView.js'

@layout.columnDockPadding(720, [0, 0, 0, 0])
export class LoginView extends View {

    /* Upper part of the screen: Image with the caption: "mr box /n je spullen in de cloud"*/
    @layout.dock.top(true, 0, 10)
    imageView = new ImageView();

    /* Lower part of the screen: 1 facebook-login button and 2 buttons for register & login*/
    @layout.dockSpace(20)
    @layout.dock.top(true, 0, 10)
    buttonView = new ButtonView();

}
