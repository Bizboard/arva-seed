/**
 * Created by tom on 11/12/15.
 */

/**
 * Created by tom on 14/09/15.
 */

import {ObjectHelper}               from 'arva-js/utils/ObjectHelper.js';

export class KeyboardShortcuts {
    constructor() {
        ObjectHelper.bindAllMethods(this, this);

        const electron = require('electron');
        this.ipcRenderer = electron.ipcRenderer;

        this.registerShortcut('ctrl+alt+shift+i', this._onDevTools);
    }

    /**
     * Registers a keyboard shortcut through Electron's Inter Process Communication (IPC):
     * https://github.com/atom/electron/blob/master/docs/api/ipc-main.md
     *
     * @param {String} shortcut Keyboard shortcut as defined on
     *                          https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md
     * @param {Function} callback Callback to execute when shortcut is pressed
     */
    registerShortcut(shortcut, callback){
        this.ipcRenderer.on(shortcut, callback);
        this.ipcRenderer.send('keyboard-subscribe', shortcut);
    }

    /**
     * Show Chrome's developer tools.
     * @private
     */
    _onDevTools() {
        this.ipcRenderer.send('toggle-devtools');
    }
}
