import Surface              from 'famous/core/Surface.js';
import ImageSurface         from 'famous/surfaces/ImageSurface';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

export class ImageView extends View {

    // Background surface
    @layout.translate(0, 0, -10)
    @layout.fullSize()
    background = new Surface({properties: {backgroundColor: '#efedef'}});

    // Text surface: "mrBox"
    @layout.size(~100, ~25)
    @layout.dock.top()
    @layout.stick.center()
    pageTitle = new Surface({
        content: 'mrBox',
        properties: {
            color: '#771369',
            // Not sure if fontSize is correct, since specifications talk about 18/14, but it seems like
            // such a minor difference in size
            fontSize: '32px'
        }
    });

    // Text surface: "je spullen in de cloud"
    @layout.size(~100, ~25)
    @layout.dockSpace(5)
    @layout.dock.top()
    @layout.stick.center()
    pageSubTitle = new Surface({
        // Not sure if this is correct?
        content: 'je spullen <i style="font-size: 14px">in de cloud</i>',
        properties: {
            color: '#AAAAAA',
            fontSize: '14px'
        }
    });

    // Image surface
    @layout.size(undefined, 300)
    @layout.dockSpace(5)
    @layout.dock.top()
    @layout.stick.center()
    image = new ImageSurface({
        content:'./images/mrBox.png'
    });



}
