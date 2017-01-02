import Surface              from 'famous/core/Surface.js';
import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/Decorators.js';
import {IconButton}         from 'arva-kit/buttons/IconButton.js';
import {TextButton}         from 'arva-kit/buttons/TextButton.js';


export class ButtonView extends View {

    // Background surface
    @layout.translate(0, 0, -10)
    @layout.fullSize()
    background = new Surface({properties: {backgroundColor: 'white'}});

    // TODO Fix the padding of the text and the size of the icon
    // Button surface: facebook icon combined with text
    @layout.dock.top()
    @layout.stick.center()
    @layout.size(~330, ~50)
    facebookButton = new IconButton({
        content: 'Inloggen met Facebook',
        image: './images/fblogo.png',
        backgroundProperties: {
            backgroundColor: '#2a5298'
        },
        properties: {
            color: 'white'
        }
    });

    // TODO Not sure how to implement a border here for the button
    @layout.dock.top()
    @layout.stick.left()
    @layout.dockSpace(5)
    @layout.size(150, ~50)
    loginButton = new TextButton({
        content: 'Inloggen',
        backgroundProperties: {
            backgroundColor: 'white',
            borderRadius: '4px'
        },
        properties: {
            color: '#771369'
        }
    });

    // TODO How do I use dock and stick here correctly to display the buttons next to each other
    @layout.dock.top()
    @layout.stick.right()
    @layout.dockSpace(5)
    @layout.size(150, ~50)
    registerButton = new TextButton({
        content: 'Registreren',
        backgroundProperties: {
            backgroundColor: 'white',
            borderRadius: '4px'
        },
        properties: {
            // TODO Cant I use PrimaryUIColor for this collor?
            color: '#771369'
        }
    });


}