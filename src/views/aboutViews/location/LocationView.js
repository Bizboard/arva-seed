import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {ListView}               from 'arva-kit/list/ListView.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {LightGray}              from "arva-kit/defaults/DefaultColors.js";
import {localize}               from 'mrbox-shared/utils/Localization.js';

@layout.columnDockPadding(720, [0, 0, 0, 0  ])
export class LocationView extends View {

    // TODO not sure if this is the correct way to get a gray border between list-items?
    @layout.fullSize()
    @layout.translate(0, 0, -10)
    background = new Surface({
        properties: {
            backgroundColor: LightGray
        }
    });

    @layout.dock.top()
    @layout.fullSize()
    locationsList = new ListView({
        spacing: true,
        bold: true,
        dataStore: this.options.locations,
        dataMapper: (data) => ({
            text: data.name,
            previewText: data.status == 'Open' ? localize`Open` : localize`Closed`
        })
    });

}