import {View}                   from 'arva-js/core/View.js';
import {UITitle}                from "arva-kit/text/UITitle.js";
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js';
import {SolidTextButton}        from 'arva-kit/buttons/SolidTextButton.js';
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';

@layout.columnDockPadding(720, [64, 16, 0, 16])
export class ProfileView extends View {

    @layout.dock.top()
    @layout.size(345, 32)
    userName = new ImpactBig({ content: `${this.options.consumer.firstName} ${this.options.consumer.lastName}`});

    @layout.dock.top()
    @layout.dockSpace(8)
    @layout.size(~100, ~14)
    userEmail = new UISmallGray({
        content: `${this.options.consumer.email}`
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(~100, ~14)
    backAccountlabel = new UISmallGray({
        content: localize`Bank account details`
    });

    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(~100, ~14)
    bankAccount = new UITitle({
        content: 'NL51 INGB **** **** 00'
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(~100, ~14)
    billingAddresslabel = new UISmallGray({
        content: localize`Billing address`
    });

    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(~100, ~14)
    billingAddress = new UITitle({
        content: 'Prinsengracht 7'
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(~100, ~14)
    shippingAddresseslabel = new UISmallGray({
        content: localize`Shipping addresses`
    });

    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(~100, ~14)
    shippingAddress1 = new UITitle({
        content: 'Prinsengracht 7'
    });

    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(~100, ~14)
    shippingAddress2 = new UITitle({
        content: 'Dam 1'
    });

    @layout.dock.top()
    @layout.dockSpace(32)
    @layout.size(undefined, 48)
    editSettings = new TextButton({ content: localize`Edit settings`, enableBorder: true });

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    changePassword = new TextButton({ content: localize`Change Password`, enableBorder: true });

}
