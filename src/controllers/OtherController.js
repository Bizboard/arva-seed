/**
 * Created by lundfall on 20/07/2017.
 */

import { Controller }         from 'arva-js/core/Controller.js';
import { HomeView } from '../views/HomeView'
import { Body }                       from '../models/Bodies'
import {Injection}                      from 'arva-js/utils/Injection.js';

export class OtherController extends Controller {

  Index () {
    console.log('called other controller!');
    if (!this.homeView) {
      let body = Injection.get(Body, 'myBody')
      body.height = 13
      this.homeView = new HomeView({body, backgroundColor: 'black', list: [{text: 'Item 5'}, {text: 'Item 6'}]});

      window.changeBody = () => {{}
        window.newBody = Injection.get(Body)
        newBody.height = 321
        newBody.weight = 100
        this.homeView.setOptions({body: newBody})
      }
    }
    return this.homeView
  }
}