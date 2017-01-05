import {View}                       from 'arva-js/core/View.js';
import {layout, event}              from 'arva-js/layout/Decorators.js';
import {EditProfileContentView}     from './EditProfileContentView.js';

@layout.columnDockPadding(720, [0, 16, 0, 16])
export class EditProfileView extends View {

    /* A view containing all the content of the EditProfileView*/
    @layout.dock.top()
    @layout.dockPadding(64, 0, 32, 0)
    editProfileContent = new EditProfileContentView();

}
