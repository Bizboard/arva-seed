/**
 * Created by lundfall on 29/06/16.
 */
import {Text}               from '../components/Text.js';
import {layout, options}    from 'arva-js/layout/decorators.js';
import {View}               from 'arva-js/core/View.js';

export class ComponentDemoView extends View {
    @layout.place('center')
    @layout.size(300, 100)
    text = new Text({content: "This text is styled."})
}