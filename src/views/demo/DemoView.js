/**
 * Created by lundfall on 05/01/2017.
 */

import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout}             from 'arva-js/layout/Decorators.js';
import {combineOptions}     from 'arva-js/utils/CombineOptions.js';

export class DemoView extends View {

    @layout.fullSize()
    surface = new Surface({content: this.options.content});

    constructor(options = {}) {
        super(combineOptions({
            content: 'hello world'
        }, options));
    }
}