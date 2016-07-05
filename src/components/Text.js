/**
 * Created by lundfall on 29/06/16.
 */
import {combineOptions}     from 'arva-js/utils/CombineOptions.js';
import Surface              from 'famous/core/Surface.js';


export class Text extends Surface {
    constructor(options) {
        super(combineOptions({
            properties: {
                fontFamily: 'monospace',
                fontSize: '14px',
                textAlign: 'center',
                lineHeight:'110%',
                fontWeight: 'lighter',
                color: "#333"
            }
        }, options));
    }
}