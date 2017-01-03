import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';

export class ResetPasswordView extends View {
    @layout.size(true,true)
    doei = new Surface({ content: 'doeiiiii' })
}