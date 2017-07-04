import Surface                      from 'famous/core/Surface.js'
import { View }                     from 'arva-js/core/View.js'
import { layout, event, options }   from 'arva-js/layout/Decorators.js'
import { Model }                    from 'arva-js/core/Model.js'

class Cow {

}

@options.setup({
  body: Model,
  nested: {welcomeMessage: 'Hey dude!'},
  swap: false,
  compoundOptions1: {height: 'opt1height', weight: 'op1weight'},
  compoundOptions2: {height: 'opt2height', weight: 'op2weight'},
  compoundOptions3: {}
})
@layout.dockPadding(10)
.dockSpace(30)
export class HomeView extends View {

  @layout
    .dock.top(true)
  heightWeightName = () => {
    return AnotherView.with({
      height: this.options.body.height + 3,
      weight: this.options.body.weight,
    })
  }
  @layout
    .dock.top(true)
    .dockSpace(100)
  welcomeMessage = Surface.with({content: this.options.nested.welcomeMessage})


  @layout
    .dock.top(true)
  heightWeightName2 = () => {
    window.options = this.options
    return AnotherView.with(this.options.swap ? this.options.compoundOptions2 : this.options.compoundOptions1)
  }

  @layout
    .dock.top(true)
  heightWeightName3 = () => {
    return AnotherView.with(this.options.swap ? this.options.compoundOptions1 : this.options.compoundOptions2)
  }


  //TODO This doesn't work yet
  @layout
    .dock.top(true)
  heightWeightName4 = () => {
    return AnotherView.with(this.options.compoundOptions3)
  }

}

@options.setup({
  height: 100,
  weight: 100,
  name: 'Karl'
})
class AnotherView extends View {

  @layout.size(~100, ~25)
  @layout.dock.top()
  heightInfo = Surface.with({content: `You are ${this.options.height} cm tall!`})

  @layout.size(~100, ~25)
  @layout.dock.top()
  weightInfo = Surface.with({content: `You are ${this.options.weight} kgs heavy.`})

  @layout.size(~100, ~25)
  @layout.dock.top()
  nameInfo = Surface.with({content: `You are called ${this.options.name}.`})

}

