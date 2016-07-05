import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';
import {ComponentDemoView}          from '../views/ComponentDemoView.js';

export class HomeController extends Controller {
    Index(){
        if(!this.homeView) {
            this.homeView = new ComponentDemoView({welcomeName: 'world'});
        }
        return this.homeView;
    }
}