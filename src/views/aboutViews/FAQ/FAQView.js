import {View}                   from 'arva-js/core/View.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig';
import {TextButton}             from 'arva-kit/buttons/TextButton';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';

@layout.columnDockPadding(720, [32, 16, 0, 16])
export class FAQView extends View {

    @layout.dock.top()
    @layout.size(undefined, 48)
    instructions = new TextButton({content: localize`Show instructions again`, enableBorder: true});

    @layout.dock.top()
    @layout.size(73, 32)
    @layout.stick.center()
    @layout.dockSpace(200)
    qAndA = new ImpactBig({ content: localize`Q&A`});

}