import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {IconButton}         from 'arva-kit/buttons/IconButton.js';


export class ButtonView extends View {

    // Background surface
    @layout.translate(0, 0, -10)
    @layout.fullSize()
    background = new Surface({properties: {backgroundColor: 'white'}});

    // Button surface: facebook icon combined with text
    @layout.dock.top()
    @layout.stick.center()
    @layout.size(~330, ~50)
    button = new IconButton({
        content: 'Inloggen met Facebook',
        image: './images/fblogo.png',
        backgroundProperties: {
            backgroundColor: '#2a5298'
        },
        properties: {
            color: 'white'
        }
    });

}