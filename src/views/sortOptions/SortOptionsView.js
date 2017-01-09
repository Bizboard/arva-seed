import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {TextButton}             from "arva-kit/buttons/TextButton";
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {RadioButtons}           from 'arva-kit/components/RadioButtons';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {HomeIcon}               from 'arva-kit/icons/HomeIcon.js'
import {LightGray}              from "arva-kit/defaults/DefaultColors";

@layout.columnDockPadding(720, [32, 16, 0, 16])
export class SortOptionsView extends View {

    @layout.fullSize()
    @layout.translate(0, 0, -10)
    background = new Surface({
        properties: {
            backgroundColor: LightGray
        }
    });

    //TODO Fix radiobuttons so you don't have to provide an Icon
    @layout.dock.top()
    @layout.size(undefined, true)
    radioButtons = new RadioButtons({
        buttons: [
            {icon: HomeIcon, text: localize`Sort by name`},
            {icon: HomeIcon, text: localize`Sort by location`, selected: true},
            {icon: HomeIcon, text: localize`Sort by type`},
            {icon: HomeIcon, text: localize`Sort by category`}
            ]
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    logOutButton = new TextButton({content: localize`Send all mrBOXes`, enableBorder: true});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    removeAccountButton = new TextButton({content: localize`PDF of all my boxes`, enableBorder: true});

}