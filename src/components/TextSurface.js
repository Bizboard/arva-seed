/**
 * Created by lundfall on 29/06/16.
 */
import {combineOptions}     from 'arva-js/utils/CombineOptions.js';
import Surface              from 'famous/core/Surface.js';


export class TextSurface extends Surface{
    constructor(options) {
        super(combineOptions({
            properties: {
                font: "48px/1.13 'Avenir LT W01 65 Medium',Arial,Helvetica,sans-serif",
                color: "#333",
                backgroundColor: "antiquewhite",
                boxShadow: '0px 2px 4px 0px rgba(50, 50, 50, 0.08)'
            }
        }, options));
    }
}