import Surface              from 'famous/core/Surface.js';
import ImageSurface         from 'famous/surfaces/ImageSurface';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';

export class ImageView extends View {

    //TODO not sure if this solution is eloquent enough (also image stretches on large screen)
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
            // TODO Not sure if fontSize is correct, since specifications talk about 18/14, but it seems like such a minor difference in size
            fontSize: '32px'
        }
    });

    // Text surface: "je spullen in de cloud"
    @layout.size(~100, ~25)
    @layout.dockSpace(5)
    @layout.dock.top()
    @layout.stick.center()
    pageSubTitle = new Surface({
        // TODO Not sure if this is best practice?
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
        // TODO Is this where I put my images folder?
        content:'./images/mrBox.png'
    });

}
