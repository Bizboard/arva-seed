import { Controller }                 from 'arva-js/core/Controller.js'
import { HomeView }                   from '../views/HomeView.js'
import { DBSVView }                   from '../views/DBSVView.js'
import { Injection }                  from 'arva-js/utils/Injection.js'
import { DataSource }                 from 'arva-js/data/DataSource.js'
import { Body, Bodies }               from '../models/Bodies'
import EventEmitter                 from 'eventemitter3'

export class HomeController extends Controller {
  async Index () {
    this.testStuff();
    if (!this.homeView) {
      let body = Injection.get(Body, 'myBody')
      body.height = 13
      this.homeView = new HomeView({body,
        backgroundColor: 'white',
        list: [{text: 'Item 1'}, {text: 'Item 2'}],
        nestedList: [[{text: 'First from HomeController'}], [{text: 'Another one from HomeController'}]]
      });
      window.changeBody = () => {
        window.newBody = Injection.get(Body)
        newBody.height = 321
        newBody.weight = 100
        this.homeView.setOptions({body: newBody})
      }
    }
    return this.homeView
  }

  DBSV() {
    if(!this.dbsvView){
      let bodies = Injection.get(Bodies, {path: '025072814781607233'});
      let changeRandomBody =() => {

        if (bodies.length){
          let randomPosition = Math.floor(Math.random() * bodies.length);
          let diceValue = Math.random();
          if(diceValue > 0.2){
            bodies[randomPosition].height = Math.random();
          } else {
            bodies[randomPosition].remove()
          }
        }
        setTimeout(changeRandomBody, window.changeFrequency);
      }
      window.changeFrequency = 1500;
      changeRandomBody();
      this.dbsvView = new DBSVView({data: bodies});
    }
    return this.dbsvView;
  }

  async testStuff () {
    await new Promise((resolve) => setTimeout(resolve, 20));
    console.log('Hey!');
    console.log('Hey 2!');
    console.log('Hey 3!');
    await new Promise((resolve) => setTimeout(resolve, 400));
    console.log('Hey 4!');
    await Promise.all([new Promise((resolve) => setTimeout(resolve, 400)), new Promise((resolve) => setTimeout(resolve, 600))])
    console.log('Hey 5!');
  }

  async resolveImmediate() {
    return 3;
  }
}