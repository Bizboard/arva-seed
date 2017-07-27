/**
 * Created by lundfall on 27/07/2017.
 */
import {Surface}        from 'arva-js/surfaces/Surface.js';

import {DataBoundScrollView}        from 'arva-js/components/DataBoundScrollView.js'


import { View }                     from 'arva-js/core/View.js';

import {
  layout, bindings,
  event, flow
}                                   from 'arva-js/layout/Decorators.js';
import { Bodies } from '../models/Bodies'

@bindings.setup({
  data: Bodies,
  groupByValue: 'height'
})
export class DBSVView extends View {

  @layout.fullSize()
  surface = DataBoundScrollView.with({
    dataSource: this.options.data,
    groupBy: this.options.groupByValue &&
    ((body) => Math.floor(body[this.options.groupByValue] / 100) * 100 + 20),
    groupTemplate: (value) =>
      Surface.with({
        content: value,
        size: [undefined, 50]
      })
    ,
    itemTemplate: (body) =>
      Surface.with({
        content: `Height: ${body.height}, weight: ${body.weight}`,
        size: [undefined, 50]
      })
  });

}