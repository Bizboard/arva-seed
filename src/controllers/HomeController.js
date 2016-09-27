import {Controller}                 from 'arva-js/core/Controller.js';
import {HomeView}                   from '../views/HomeView.js';

export class HomeController extends Controller {
    Index(){
        if(!this.homeView) {
            this.homeView = new HomeView({welcomeName: 'world'});
        }
        return this.homeView;
    }
}