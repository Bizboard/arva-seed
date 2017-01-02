import Surface              from 'famous/core/Surface.js';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';


export class EmailLoginView extends View {

    @layout.dock.top()
    @layout.size(~50, ~10)
    hoi = new Surface({content: 'hoiiiii'});

}
