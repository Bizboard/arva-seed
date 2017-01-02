import Surface              from 'famous/core/Surface.js';
import ImageSurface         from 'famous/surfaces/ImageSurface';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

export class HomeView extends View {

    //backgroundcolor upper-helft: #efedef

    @layout.size(~200, ~50)
    @layout.dock.top()
    @layout.stick.center()
    pageTitle = new Surface({
        content: 'mrBox',
        properties: {
            color: '#771369',
            fontSize: '32px'
        }
    });

    @layout.size(~200, ~50)
    @layout.dockSpace(5)
    @layout.dock.top()
    @layout.stick.center()
    pageSubTitle = new Surface({
        content: 'je spullen <i style="font-size: 14px">in de cloud</i>',
        properties: {
            color: '#AAAAAA',
            fontSize: '14px'
        }
    });


    @layout.size(undefined, 300)
    @layout.dockSpace(5)
    @layout.dock.top()
    @layout.stick.center()
    image = new ImageSurface({
        content:'./images/mrBox.png'
    });



}
