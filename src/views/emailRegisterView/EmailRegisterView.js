import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';

export class EmailRegisterView extends View {

    @layout.size(true,true)
    hallo = new Surface({ content: 'hallooooooo' })

}