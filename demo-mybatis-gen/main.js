const electron = require('electron');
const {app} = electron;
const {BrowserWindow} = electron;

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({width: 800, height: 600});
    mainWindow.loadURL(`file://${__dirname}/index-easy-ui.html`);
    
    mainWindow.webContents.openDevTools();
    
    mainWindow.on('closed', () => {
       mainWindow = null; 
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('active', () => {
   if (mainWindow === null) {
       createWindow();
   } 
});