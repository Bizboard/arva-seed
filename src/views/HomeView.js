import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

export class HomeView extends View {

    @layout.size(100, 100)
    @layout.stick.center()
    square = new Surface({ content: 'works', properties: { backgroundColor: 'red' } });

    @layout.size(100, 100)
    @layout.stick.bottom()
    circle = new Surface({ properties: { backgroundColor: 'blue', borderRadius: '50%' } });
}
