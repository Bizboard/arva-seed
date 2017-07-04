import { Controller }                 from 'arva-js/core/Controller.js'
import { HomeView }                   from '../views/HomeView.js'
import { Injection }                  from 'arva-js/utils/Injection.js'
import { DataSource }                 from 'arva-js/data/DataSource.js'
import { Body }                       from '../models/Bodies'
import EventEmitter                 from 'eventemitter3'

export class HomeController extends Controller {
  async Index () {

    if (!this.homeView) {
      let body = Injection.get(Body, 'myBody')
      body.height = 179
      body.weight = 68
      this.homeView = new HomeView({body})

      window.changeBody = () => {
        window.newBody = Injection.get(Body)
        newBody.height = 321
        newBody.weight = 100
        this.homeView.setOptions({body: newBody})
      }
    }
    return this.homeView
  }
}