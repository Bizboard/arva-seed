import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';

export class HomeView extends View {
    constructor(welcomeName = 'world'){
        super();

        /* Create the renderable components we want to show in this view. */
        this.renderables.message = new Surface({content: `Hello ${welcomeName}!`});

        /* Tell famous-flex how to render our components in Famous. */
        this.layouts.push((context) => {
            context.set('message', {
                size: [true, true],
                origin: [0.5, 0.5],
                align: [0.5, 0.5]
            });
        });
    }
}