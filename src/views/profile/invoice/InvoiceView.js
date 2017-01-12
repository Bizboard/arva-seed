/* To test this view, insert firebase.auth().signInWithEmailAndPassword('karl@gmail.com', 'karl1234')*/

import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {UISmall}                from 'arva-kit/text/UISmall';
import {ListView}               from 'arva-kit/list/ListView.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {LightGray}              from "arva-kit/defaults/DefaultColors.js";
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {Colors}                 from "arva-kit/defaults/DefaultColors.js";

@layout.columnDockPadding(720, [0, 0, 0, 0])
export class InvoiceView extends View {

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
        scrollViewOptions: {
            /* TODO probarly need to fix grouping per language*/
            groupBy: (invoice) =>  {if (invoice.status == 'Openstaand') {return 'Openstaand';} else {return 'Betaald';}},
            groupTemplate: (status) => {
                @layout.dockPadding(8,16,0,16)
                class GroupHeader extends View {
                    @layout.dock.top()
                    @layout.size(undefined, 20)
                    text = new UISmall({content: status});
                }
                return new GroupHeader();
            }
        },
        dataStore: this.options.invoices,
        dataMapper: (data) => ({
            text: data.timestamp,
            previewText: data.description,
            statusColor: data.status == 'Openstaand' ? Colors.PrimaryUIColor : Colors.White
        })
    });

}