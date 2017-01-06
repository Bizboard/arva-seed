import {View}                   from 'arva-js/core/View.js';
import {Dropdown}               from 'arva-kit/input/Dropdown.js';
import {Switch}                 from "arva-kit/components/Switch";
import {TextButton}             from "arva-kit/buttons/TextButton";
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js'


@layout.columnDockPadding(720, [32, 16, 0, 16])
export class SettingsView extends View {

    @layout.dock.top()
    @layout.size(~20, ~5)
    language = new UISmallGray({
        content: localize`Language`
    });

    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, ~50)
    languageDropdown = new Dropdown({
        items: [
            {
                text: localize`Dutch`,
                selected: true,
                data: 1
            },
            {
                text: localize`English`,
                selected: false,
                data: 2
            }]
    });

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, ~50)
    switch = new Switch({
        variation: 'large',
        text: localize`Notifications`,
        shadowType: 'hardShadow',
        enabled: true
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    logOutButton = new TextButton({content: localize`Log out`, enableBorder: true});

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    removeAccountButton = new TextButton({content: localize`Remove Account`, properties: {color: Colors.WarningColor}, enableBorder: true});

}