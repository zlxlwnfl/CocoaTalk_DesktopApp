const url = require('url');

function createWindow() {
    const win = new BrowserWindow({
        width:1920,
        height:1080
    });

    const startUrl = process.env.ELECTRON_START_URL || url.format({
        pathname: path.join(__dirname, '/../build/index.html'),
        protocol: 'file:',
        slashes: true
    });

    win.loadURL(startUrl);
}

app.on('ready', createWindow);
