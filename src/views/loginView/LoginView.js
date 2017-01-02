import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

import {ImageView}          from './ImageView.js'
import {ButtonView}         from './ButtonView.js'

export class LoginView extends View {

    // TODO Stop the indexing
    // TODO Why can't I reach arva files?
    // Upper part of the screen: Image with the caption: "mr box /n je spullen in de cloud"
    @layout.dock.top(0.6, 0, 10)
    imageView = new ImageView();

    // TODO Fix the space between imageview and buttonview
    // @layout.dockSpace(20)
    @layout.dock.top(undefined, 0, 10)
    buttonView = new ButtonView();


}
