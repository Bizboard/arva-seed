import Surface              from 'famous/core/Surface.js';
import AnimationController  from 'famous-flex/AnimationController.js';
import {View}               from 'arva-js/core/View.js';
import {layout}             from 'arva-js/layout/decorators.js';


export class ViewWithTopBar extends View {
    /* Dock to the top with a 44px height */
    @layout.dock('top', 44)
    /* Place it in the midddle of the view */
    /* Define an animation on creation */
    @layout.animate({
        animation: AnimationController.Animation.Slide.Down,
        transition: {duration: 100}
    })
    /* Initialize the surface itself */
    topBar = new Surface({
        /* CSS properties */
        properties: {
            backgroundColor: 'teal'
        }
    });
}


export class HomeView extends ViewWithTopBar {
    /* The size of this surface is 300x25 px */
    @layout.size(300, 25)
    /* Place it in the midddle of the view */
    @layout.place('center')
    /* Define an animation on creation */
    @layout.animate({
        waitFor: 'topBar',
        animation: AnimationController.Animation.FadedRotateZoom,
        transition: {duration: 1000}
    })
   /* Initialize the surface itself */
    message = new Surface({
        /* The content of the surface */
        content: 'Hello world',
        /* CSS properties */
        properties: {
            textAlign: 'center',
            color: 'slategray'
        }
    });

    /* Translate the element in z space to the back */
    @layout.translate(0, 0, -10)
    /* Make the element cover the entire space */
    @layout.fullscreen
    /* Definition of the element */
    background = new Surface({properties: {backgroundColor: 'aliceblue'}});

    @layout.size(300, 25)
    /* Translate 100px below our main message */
    @layout.translate(0, 100, 0)
    @layout.animate({
        /* Hide initially */
        showInitially: false,
        /* Slide to the left in form the right */
        animation: AnimationController.Animation.Slide.Left,
        transition: {duration: 500}
    })
    @layout.place('center')
    answer = new Surface({content: 'Yes?', properties: {textAlign: 'center'}});

    constructor(options) {
        super(options);
        this.message.on('click', () => {
            this.showRenderable('answer');
        });
    }
}


