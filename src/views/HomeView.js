import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, options}    from 'arva-js/layout/decorators.js';

export class HomeView extends View {
    @layout.size(~100, ~25)
    @layout.stick.center()
    message = new Surface({content: `Hello ${this.options.welcomeName}`});

    constructor(options = {}){
        super(options);
    }
}
