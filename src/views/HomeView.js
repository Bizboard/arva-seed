import Surface                          from 'famous/core/Surface.js'
import { View }                         from 'arva-js/core/View.js'
import { layout, event, bindings, flow }  from 'arva-js/layout/Decorators.js'
import { Model }                        from 'arva-js/core/Model.js'

let compoundOptionDuplicate = {height: 123, weight: 234, backgroundColor: 'white'}

@layout.nativeScrollable()
@bindings.setup({
  body: Model,
  nested: {welcomeMessage: 'Hey dude!'},
  swap: false,
  nested2: {welcomeMessage: 'Hey dude!'},
  backgroundColor: 'red',
  fromFirstPreProcessing: 'firstPreprocessing',
  fromSecondProcessing: 'secondPreprocessing',
  outputFromPreprocessing: 123,
  compoundOptions1: {height: 'opt1height', weight: 'op1weight'},
  compoundOptions2: {height: 'opt2height', weight: 'op2weight'},
  compoundOptions3: {},
  compoundOptions4: {height: 123, weight: 60, backgroundColor: 'white'},
  compoundOptions5: compoundOptionDuplicate,
  compoundOptions6: compoundOptionDuplicate,
  list: [
    {
      text: 'Option 1'
    }
  ],
  nestedList: [
    [
      {
        text: 'Option 1'
      }
    ]
  ],
  fakeList: {
    0: {
      text: 'firstEntry'
    }
  },
})
@bindings.preprocess((incomingOptions, defaultOptions) => {
  if (incomingOptions.backgroundColor !== defaultOptions.backgroundColor) {

    if (incomingOptions.compoundOptions5) {
      incomingOptions.compoundOptions5.backgroundColor = incomingOptions.backgroundColor
    }

    incomingOptions.compoundOptions6 =
      {
        ...defaultOptions.compoundOptions6,
        backgroundColor: incomingOptions.backgroundColor
      }
    /*This is made to be sure that the getter of compoundOptions6 can be detected (works as of now) */
  } else if (incomingOptions.compoundOptions6 && incomingOptions.compoundOptions6.backgroundColor) {
    incomingOptions.compoundOptions5.backgroundColor = incomingOptions.compoundOptions6.backgroundColor
  }
})
@bindings.preprocess((incomingOptions) => {
  if (incomingOptions.fromFirstPreProcessing) {
    incomingOptions.outputFromPreprocessing = 'Processed by first preprocessing'
  }
})
@bindings.preprocess((incomingOptions) => {
  if (incomingOptions.fromSecondProcessing) {
    incomingOptions.outputFromPreprocessing = 'Processed by second preprocessing'
  }
})
@layout.dockPadding(10)
  .dockSpace(30)
export class HomeView extends View {

  @flow.defaultState('top', {}, layout
    .dock.top(true).translate(0, 0, 0))
  @flow.stateStep('bottom', {}, layout.translate(0, 200, 0))
  heightWeightName = options =>
    AnotherView.with({
      height: options.body.height,
      @bindings.onChange((weight) => options.body.weight = weight)
      weight: options.body.weight,

    })

  @flow.defaultState('top', {}, layout
    .dock.top(true).translate(0, 0, 0))
  @flow.stateStep('bottom', {}, layout.translate(0, 200, 0))
  heightWeightNameDuplicate = options =>
    AnotherView.with({
      [layout.extra]: {
        @layout.dock.top(~30)
        extra: this.options.list[0] && Surface.with({content: this.options.list[0].text}),
        @layout.dock.top(~30)
        extra2: Surface.with({content: 'Hello world 2'})
      },
      height: options.body.height,
      @bindings.onChange((weight) => options.body.weight = weight)
      weight: options.body.weight,
    })

  @layout
    .dock.top(true)
    .dockSpace(100)
    .animate({showInitially: false})
  welcomeMessage = Surface.with({
    content: this.options.nested.welcomeMessage
  })

  @event.on('click', function () {
    this.showRenderable(this.welcomeMessage)
  })
  @layout
    .dock.top(true)
  heightWeightName2 = () => {
    window.options = this.options
    window.optionObserver = this._optionObserver;
    window.homeView = this
    return AnotherView.with(this.options.swap ? this.options.compoundOptions2 : this.options.compoundOptions1)
  }

  @event.on('click', function () {
    this.hideRenderable(this.welcomeMessage)
  })
  @layout
    .dock.top(true)
  heightWeightName3 = () => {
    return AnotherView.with(this.options.swap ? this.options.compoundOptions1 : this.options.compoundOptions2)
  }

  @layout
    .dock.top(true)
  heightWeightName4 = () => {
    return this.options.swap ? AnotherView.with(this.options.compoundOptions3) : Surface.with({content: 'Hello world'})
  }

  @layout
    .dock.top(true)
  heightDisplay = () => {
    return Surface.with({
      content: `Direct access to body height: ${this.options.body.height}`
    })
  }

  @flow.defaultState('top', {}, layout
    .dock.top(true).translate(0, 0, 0))
  @flow.stateStep('bottom', {}, layout.translate(0, 200, 0))
  heightWeightName5 = options =>
    AnotherView.with({
      height: options.compoundOptions4.height,
      weight: options.compoundOptions4.weight,
      backgroundColor: options.compoundOptions4.backgroundColor
    })

  @flow.defaultState('top', {}, layout
    .dock.top(true).translate(0, 0, 0))
  @flow.stateStep('bottom', {}, layout.translate(0, 200, 0))
  heightWeightName6 = options =>
    AnotherView.with(options.compoundOptions5)

  @flow.defaultState('top', {}, layout
    .dock.top(true).translate(0, 0, 0))
  @flow.stateStep('bottom', {}, layout.translate(0, 200, 0))
  heightWeightName7 = options =>
    AnotherView.with({
      height: options.compoundOptions6.height,
      weight: options.compoundOptions6.weight,
      backgroundColor: options.compoundOptions6.backgroundColor
    })

  @layout.animate()
  @layout.size(~100, ~25)
    .dock.top()
  list = this.options.list.map(item =>
    Surface.with({content: item.text})
  )

  @layout.size(~100, ~25)
    .dock.top()
  fakeList = Surface.with({content: this.options.fakeList[0].text})

  @layout.size(~100, ~25)
    .dock.top()
  fromNestedList = this.options.nestedList.map((innerList) => Surface.with({content: innerList.map(({text}) => text).join(', ')}))
}

@bindings.setup({
  height: 100,
  weight: 100,
  name: 'Karl',
  backgroundColor: 'white'
})
class AnotherView extends View {

  @layout.translate(0, 0, -10)
  @layout.fullSize()
  bg = Surface.with({properties: {backgroundColor: this.options.backgroundColor}})

  @layout.size(~100, ~25)
  @layout.dock.top()
  heightInfo = Surface.with({content: `You are ${this.options.height} cm tall!`})

  @layout.size(~100, ~25)
  @layout.dock.top()
  weightInfo = Surface.with({content: `You are ${this.options.weight} kgs heavy.`})

  @layout.size(~100, ~25)
  @layout.dock.top()
  nameInfo = Surface
    .with({content: `You are called ${this.options.name}.`})

  @event.on('click', function () {
    this.options.weight += 10
  })
  @layout.size(~100, ~25)
    .dock.top()
  increaseByTenButton = Surface.with({
    content: `Increase by 10`,
    properties: {backgroundColor: 'lightblue', borderRadius: '5px'},
  })

}

