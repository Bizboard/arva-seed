/**
 * Created by lundfall on 05/07/16.
 */


import {Controller}                 from 'arva-js/core/Controller.js';
import {ComponentDemoView}          from '../views/ComponentDemoView.js';

export class DemoController extends Controller {
    Test(param1, param2){
        console.log(param1);   // "a"
        console.log(param2);   // "b"
        return new ComponentDemoView();
    }
}