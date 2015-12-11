'use strict';
const electron = require('electron');
const globalShortcut = electron.globalShortcut;
const ipcMain = electron.ipcMain;
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

// Report crashes to our server.
electron.crashReporter.start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

// Quit when all windows are closed.
app.on('window-all-closed', function() {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the browser window.
  mainWindow = new BrowserWindow({width: 800, height: 600});

  // and load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Emitted when the window is closed.
  mainWindow.on('closed', function() {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });

  /* Register keyboard shortcut listener that can be called from renderer processes
   * https://github.com/atom/electron/blob/master/docs/api/ipc-main.md
   * https://github.com/atom/electron/blob/master/docs/api/global-shortcut.md */
  ipcMain.on('keyboard-subscribe', function(event, arg) {
    globalShortcut.register(arg, function() {
      event.sender.send(arg);
    });
  });
  ipcMain.on('toggle-devtools', function() {
    mainWindow.webContents.toggleDevTools();
  });
  ipcMain.on('minimize', function() {
    mainWindow.minimize();
  });
});
