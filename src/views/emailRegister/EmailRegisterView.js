import EmailValidator           from 'email-validator';
import BkImageSurface           from 'famous-bkimagesurface/BkImageSurface.js';
import Surface                  from 'famous/core/Surface.js';

import {View}                   from 'arva-js/core/View.js';
import {layout, event}          from 'arva-js/layout/Decorators.js';

import {Dropdown}               from 'arva-kit/input/Dropdown.js';
import {ImpactBig}              from 'arva-kit/text/ImpactBig.js';
import {UISmallGray}            from 'arva-kit/text/UISmallGray.js';
import {TextButton}             from 'arva-kit/buttons/TextButton.js';
import {Colors}                 from 'arva-kit/defaults/DefaultColors.js';
import {TypeFaces}              from 'arva-kit/defaults/DefaultTypefaces.js';
import {LabeledTextInput}       from 'arva-kit/input/LabeledTextInput.js';
import {localize}               from 'mrbox-shared/utils/Localization.js';

import MrBoxLogo                from '../../resources/MrBoxLogo.svg';

@layout.scrollable()
@layout.columnDockPadding(720, [16])
export class EmailRegisterView extends View {

    // Background Image Surface: MrBoxLogo
    @layout.fullSize()
    @layout.opacity(0.1)
    @layout.translate(0, 0, -10)
    backgroundimage = new BkImageSurface({
        content: MrBoxLogo
    });


    /* Header: Register*/
    @layout.dock.top()
    @layout.size(132, 32)
    register = new ImpactBig({content: localize`Register`});

    /* Label: title*/
    @layout.dock.top()
    @layout.dockSpace(64)
    @layout.size(~20, ~5)
    label = new UISmallGray({
        content: localize`Title`
    });

    /* Dropdown: title*/
    @layout.dock.top()
    @layout.dockSpace(4)
    @layout.size(undefined, ~50)
    titleDropdown = new Dropdown({
        fakeWithNative: true,
        placeholder: localize`Choose your title`,
        items: [
            {
                text: localize`Mr.`,
                selected: false,
                data: 1
            },
            {
                text: localize`Mrs.`,
                selected: false,
                data: 2
            }]
    });

    /* Label button view: first name*/

    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, true)
    firstName = new LabeledTextInput({
        label: localize`First name`,
        usesFeedback: true,
        required: true,
        placeholder: localize`Enter your firstname`,
        password: false,
        feedbackText: localize`Required`,
        validator: (input) => ({isValid: input.match(/^[a-z]+$/i), feedback: localize`Only A-Z`})
    });

    /* Label button view: infix*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, true)
    infixName = new LabeledTextInput({
        label: localize`Infix`,
        required: false,
        placeholder: localize`Possible infix`,
        password: false
    });

    /* Label button view: last name*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, true)
    lastName = new LabeledTextInput({
        label: localize`Last name`,
        required: true,
        usesFeedback: true,
        placeholder: localize`Enter your lastname`,
        password: false,
        validator: (input) => ({isValid: input.match(/^[a-z]+$/i), feedback: localize`Only alphabetic characters`})
    });

    /* Label button view: email*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, true)
    email = new LabeledTextInput({
        label: 'Email',
        required: true,
        usesFeedback: true,
        placeholder: localize`Enter your email`,
        password: false,
        validator: (input) => {
            let isValid = EmailValidator.validate(input);
            return {isValid, feedback: isValid ? localize`Valid email` : localize`Invalid email`}
        }


    });

    /* Label button view: password*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @event.on('valueChange', function() {
        this.repeatPassword.input.revalidate();
    })
    @layout.size(undefined, true)
    password = new LabeledTextInput({
        label: localize`Password`,
        required: true,
        usesFeedback: true,
        placeholder: localize`Enter your password`,
        password: true,
        validator: (input) => ({isValid: input.length >= 8, feedback: localize`At least 8 characters`})
    });

    /* Label button view: repeat password*/
    @layout.dock.top()
    
    @layout.dockSpace(16)
    @layout.size(undefined, true)
    repeatPassword = new LabeledTextInput({
        label: localize`Repeat password`,
        usesFeedback: true,
        required: true,
        placeholder: localize`Repeat your password`,
        password: true,
        validator: (input) => ({isValid: input === this.password.getValue(), feedback: localize`Must match previous`})
    });

    /* Register button*/
    @layout.dock.top()
    @event.on('buttonClick', function() {
        this._eventOutput.emit('register', this._fieldValues);
    })
    @layout.dockSpace(64)
    @layout.size(undefined, 48)
    registerButton = new TextButton({content: localize`Register`, enableBorder: true, enabled: false});

    /* Cancel button*/
    @layout.dock.top()
    @layout.dockSpace(16)
    @layout.size(undefined, 48)
    cancelButton = new TextButton({content: localize`Cancel`, enableBorder: true, clickEventName: 'cancel'});


    constructor(options) {
        super(options);
        this.on('stateIncorrect', () => {
            /* Apprently, at least one field is incorrect, so disable button */
            this.registerButton.disable();
        });
        this.on('stateCorrect', () => {
            /* A field has been updated, see if we can enable the button */
            let fieldRenderableNames = ['firstName', 'lastName', 'email', 'password', 'repeatPassword'];
            let inputReady = true;
            this._fieldValues = {};
            for (let fieldName of fieldRenderableNames) {
                let field = this[fieldName];
                if(!field.input.isStateCorrect()){
                    inputReady = false;
                    break;
                }
                /* Don't save the password repeat */
                if(fieldName !== 'repeatPassword'){
                    this._fieldValues[fieldName] = field.getValue();
                }
            }
            if (inputReady) {
                this.registerButton.enable();
            } else {
                this.registerButton.disable();
            }
        });

    }


}
