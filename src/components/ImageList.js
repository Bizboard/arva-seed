/**
 * Created by tom on 23/09/16.
 */

import Surface                  from 'famous/core/Surface.js';
import BkImageSurface           from 'famous-bkimagesurface';

import {View}                   from 'arva-js/core/View.js';
import {Injection}              from 'arva-js/utils/Injection.js';
import {flow, layout, event}    from 'arva-js/layout/Decorators.js';
import {flowStates}             from 'arva-js/layout/FlowStates.js';
import {combineOptions}         from 'arva-js/utils/CombineOptions.js';
import {SolidTextButton}        from 'arva-kit/buttons/SolidTextButton.js';
import {DataBoundScrollView}    from 'arva-js/components/DataBoundScrollView.js';

import {CrossIcon}              from 'arva-kit/icons/CrossIcon.js';
import {SolidImageButton}       from 'arva-kit/buttons/SolidImageButton.js';
import {OutlineImageButton}     from 'arva-kit/buttons/OutlineImageButton.js';
import {BoxPictures}            from '../models/BoxPicture.js';


class ImageView extends View {

    @layout.fullSize()
    @layout.translate(0, 0, 10)
    image = new BkImageSurface({
        content: this.options.url || '',
        sizeMode: BkImageSurface.SizeMode.ASPECTFILL
    });

    @layout.opacity(0)
    @layout.size(48, 48)
    @layout.stick.topRight()
    @layout.translate(-8, 8, 40)
    @flowStates.fade('active', {opacity: 1})
    cross = new SolidImageButton({
        icon: CrossIcon,
        makeRipple: true,
        useBackground: true
    });
}


export class ImageList extends View {

    @layout.fullSize()
    list = new DataBoundScrollView({
        layoutOptions: {
            spacing: 10
        },
        layoutAll: true,
        touchMoveDirectionThreshold: 0.5,
        autoPipeEvents: true,
        throttleDelay: 100, /* If set to 0, no delay is added in between adding items to the DataBoundScrollView. */
        sortingDirection: 'ascending',
        flow: true,
        direction: 0,
        flowOptions: {
            spring: {               // spring-options used when transitioning between states
                dampingRatio: 0.8,  // spring damping ratio
                period: 1000        // duration of the animation
            },
            insertSpec: {           // render-spec used when inserting renderables
                opacity: 0          // start opacity is 0, causing a fade-in effect,
            }
        },
        dataFilter: ()=> true,
        itemTemplate: (item)=> {
            let imageView = new ImageView({url: item.url, edit: this.options.edit});
            this.options.edit && imageView.setRenderableFlowState('cross', 'active');
            imageView.cross.on('click', ()=> {
                item.remove();
            });
            return imageView;
        },
        ensureVisible: null,
        chatScrolling: false,
        dataStore: Injection.get(BoxPictures, this.options.uid)
    });

    @layout.fullSize()
    @event.pipe('list')
    touchArea = new Surface();

    constructor(options) {
        super(combineOptions(
            {
                edit: false
            },
            options));

        this.list.on('resize', ()=> {
            this.reflowRecursively();
        });
    }

    getSize() {
        return [undefined, this.list.getDataStore().length > 0 ? 280 : 0];
    }
}