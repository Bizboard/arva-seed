/**
 * Created by lundfall on 29/06/16.
 */
import Surface              from 'famous/core/Surface.js';
import CollectionLayout     from 'famous-flex/layouts/CollectionLayout.js';

import {layout}             from 'arva-js/layout/decorators.js';
import {View}               from 'arva-js/core/View.js';
import {DataBoundScrollView}from 'arva-js/components/DataBoundScrollView.js';

import {Monkeys}            from '../models/Monkeys.js';

export class DataView extends View {
    @layout.fullscreen
    scrollView = new DataBoundScrollView({
    layout: CollectionLayout,
    layoutOptions: {
        itemSize: [undefined, 30]
    },
    itemTemplate: (monkey) =>
        new Surface({content: `Mood: ${monkey.currentMood}`}),
    dataStore: new Monkeys()
    });
}