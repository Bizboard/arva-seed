import Surface              from 'famous/core/Surface.js';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

import {ImageView}          from './ImageView.js'
import {ButtonView}         from './ButtonView.js'

export class LoginView extends View {

    // Upper part of the screen: Image with the caption: "mr box /n je spullen in de cloud"
    @layout.dock.top(0.6, 0, 10)
    imageView = new ImageView();


    // @layout.dockSpace(20)
    @layout.dock.top(undefined, 0, 10)
    buttonView = new ButtonView();


}
