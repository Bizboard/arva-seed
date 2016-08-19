import Surface              from 'famous/core/Surface.js';

import {View}               from 'arva-js/core/View.js';
import {layout, event}      from 'arva-js/layout/decorators.js';

@layout.flow({spring: {dampingRatio: 0.8, period: 1500}})
export class HomeView extends View {


    _swap(i) {
        let swapWith = Math.floor(Math.random() * this._noRenderables);
        if (swapWith === i) {
            swapWith = i + 1;
        }
        if (i === 0) {
            this.prioritiseDockAfter(i.toString(), swapWith.toString());
        } else {
            this.prioritiseDockBefore(i.toString(), swapWith.toString());
        }
    }

    _redockBigText() {
        let availableDockingMethods = ['left', 'right', 'top', 'bottom'];
        let currentDockingMethodIndex = availableDockingMethods.indexOf(this.bigText.decorations.dock.dockMethod);
        let newDockingMethod = availableDockingMethods[(currentDockingMethodIndex + 1) % availableDockingMethods.length];
        this.decorateRenderable('bigText', layout.dock[newDockingMethod](100));
        this.reflowRecursively();
    }

    constructor(options = {}) {
        super(options);
        this._noRenderables = 17;
        for (let i = 0; i < this._noRenderables; i++) {
            this.addRenderable(new MyText(`This is number ${i}`), `${i}`,
                event.on('mouseout', this._swap.bind(this, i)),
                layout.size(300, 25),
                layout.swipable({snapY: true, xRange: [0, 200]}),
                layout.dock.top()
            );

        }


        this.addRenderable(new Surface({
                content: `Big text Big text `,
                properties: {
                    backgroundColor: 'chartreuse'
                }
            }), 'bigText',
            event.on('click', this._redockBigText),
            layout.dock.top(100)
        );

        this.bigText._big = true;

        this.addRenderable(new MyText(`Debug`), 'debug',
            layout.size(undefined, ~25),
            layout.animate(),
            event.on('click', () => {
                this._respositionRenderable('debug');
            }),
            layout.dock.top()
        )
        /*this.renderables.debug._clickMove = true;
        this.addRenderable(new MyText(`c r a z y  s h i t !`), 'anotherDebug',
            layout.size(100, 25),
            event.on('click', this._respositionRenderable.bind(this,'anotherDebug')),
            layout.stick.center()
        );
        setInterval(this._respositionRenderable.bind(this,'anotherDebug'), 100);
        this.anotherDebug._debug = true;*/
    }

    _respositionRenderable(renderableName) {
        this.decorateRenderable(renderableName, layout.size((Math.ceil(Math.random()*150)) + 20,(Math.ceil(Math.random()*150))), layout.translate((Math.ceil(Math.random()*40)) + 20,(Math.ceil(Math.random()*400)) - 180, 0), layout.rotate(0,0,2*Math.PI*Math.random() - Math.PI/2))
    }
}

let randByte = () => Math.floor(Math.random() * 255);
let randColor = () => `rgb(${randByte()}, ${randByte()}, ${randByte()})`;

class MyText extends Surface {
    constructor(content) {
        super({content, properties: {backgroundColor: randColor()}});

    }
}
