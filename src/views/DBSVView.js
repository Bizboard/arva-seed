/**
 * Created by lundfall on 27/07/2017.
 */
import { Surface }                    from 'arva-js/surfaces/Surface.js'
import formatDecimal                from 'format-decimal'
import { DataBoundScrollView }        from 'arva-js/components/DataBoundScrollView.js'

import { View }                     from 'arva-js/core/View.js'

import {
  layout, bindings,
  event, flow
}                                   from 'arva-js/layout/Decorators.js'
import { Bodies } from '../models/Bodies'
import { TextButton }               from 'arva-kit/buttons/TextButton.js'

@bindings.setup({
  data: Bodies,
  groupByValue: 'height'
})
@layout.dockPadding(10)
export class DBSVView extends View {

  @event.on('click', function () {
    this.options.data.add({weight: this._getMinWeight() - 1, height: Math.random()})
  })
  @layout.dock.top(true)
  addToTop = TextButton.with({content: 'Add to top'})
  @event.on('click', function () {
    let minEntry = this._getMinWeight(), maxEntry = this._getMaxWeight();
    this.options.data.add({weight: minEntry + Math.random()*(maxEntry - minEntry), height: Math.random()})
  })
  @layout.dock.top(true)
  addToRandomPosition = TextButton.with({content: 'Add to random position'})

  @event.on('click', function () {
    this.options.data.add({weight: this._getMaxWeight() + 1, height: Math.random()})
  })
  @layout.dock.bottom(true)
  addToBottom = TextButton.with({content: 'Add to bottom'})

  @layout
    .stick.center()
    .size(undefined, 0.4)
  dbsv = DataBoundScrollView.with({
    dataSource: this.options.data,
    orderBy: 'weight',
    itemTemplate: (body) => ItemTemplate.with({weight: body.weight, height: body.height}),
    chatScrolling: true
  })

  _getMinWeight() {
    return Math.min(0, ...this.options.data.map(({weight}) => weight))
  }

  _getMaxWeight() {
    return Math.max(0, ...this.options.data.map(({weight}) => weight))
  }
}

@bindings.setup({
  height: 0,
  weight: 0
})
class ItemTemplate extends View {
  @layout.size(undefined, true)
  content = (options) => Surface.with({
      content: `Height: ${formatDecimal(options.height, {decimal: '.', thousands: ''})}, weight: ${formatDecimal(options.weight, {decimal: '.', thousands: ''})}`,
      properties: {lineHeight: `${10 + 40 * options.height}px`},
      fontFamily: 'monospace'
    }
  )
}