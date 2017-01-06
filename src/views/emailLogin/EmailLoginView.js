import BkImageSurface           from 'famous-bkimagesurface/BkImageSurface.js';
import ImageSurface             from 'famous/surfaces/ImageSurface.js';
import EmailValidator           from 'email-validator';

import {View}                   from 'arva-js/core/View.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js';
import {SolidTextButton}        from 'arva-kit/buttons/SolidTextButton.js';
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';

import MrBoxLogo                from '../../resources/MrBoxLogo.svg';


@layout.columnDockPadding(720, [16])
export class EmailLoginView extends View {

    /* Background Image Surface: MrBoxLogo*/
    @layout.size(undefined, true)
    @layout.opacity(0.1)
    @layout.translate(0, 80, -10)
    backgroundimage = new ImageSurface({
        content: MrBoxLogo
    });

    /* Header: Login*/
    @layout.dock.top()
    @layout.size(132, 32)
    login = new ImpactBig({content: localize`Log in`});

    /* Label button view: email*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(undefined, true)
    emailLabelInput = new LabeledTextInput({
        content: 'Email',
        required: true,
        usesFeedback: true,
        feedbackText: localize`Required`,
        placeholder: localize`Enter your email`,
        validator: (input) => {
            let isValid = EmailValidator.validate(input);
            return {isValid, feedback: isValid ? localize`Valid email` : localize`Invalid email`}
        }
    });

    /* Label button view: password*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, true)
    passwordLabelInput = new LabeledTextInput({
        content: localize`Password`,
        required: true,
        usesFeedback: true,
        feedbackText: localize`Required`,
        placeholder: localize`Enter your password`,
        password: true
    });

    /* Login button*/
    @layout.dock.top()
    @event.on('buttonClick', function () {
        this._eventOutput.emit('login', this.emailLabelInput.getValue(), this.passwordLabelInput.getValue());
    })
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
    loginButton = new SolidTextButton({content: 'Log in', enableBorder: true, enabled: false});

    /* Forgot password button*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    forgotPasswordButton = new TextButton({
        content: localize`Forgot password`,
        enableBorder: true,
        clickEventName: 'forgotPassword'
    });

    /* Cancel Button*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancelButton = new TextButton({content: localize`Cancel`, enableBorder: true, clickEventName: 'cancel'});


    constructor(options) {
        super(options);
        this.on('stateIncorrect', () => {
            this.loginButton.disable();
        })
        this.on('stateCorrect', () => {
            if (this.emailLabelInput.input.isStateCorrect() && this.passwordLabelInput.input.isStateCorrect()) {
                this.loginButton.enable();
            } else {
                this.loginButton.disable();
            }
        })
    }
}
