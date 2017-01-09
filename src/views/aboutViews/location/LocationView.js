import {View}                   from 'arva-js/core/View.js';
import {ListView}               from 'arva-kit/list/ListView';
import {ImpactBig}              from 'arva-kit/text/ImpactBig';
import {TextButton}             from 'arva-kit/buttons/TextButton';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';

@layout.columnDockPadding(720, [0, 16, 0, 16])
export class LocationView extends View {

    @layout.dock.top()
    @layout.fullSize()
    listView = new ListView({
        bold: true,
        dataStore: this.options.locations,
        dataMapper: (data) => ({
            text: data.name,
            previewText: data.status
        })
    });


}