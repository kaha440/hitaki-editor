import { app, BrowserWindow, shell } from 'electron';
import path from 'path';
import { env } from 'process';

const isDevelop = !app.isPackaged;
const isMac = process.platform === 'darwin';

export function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 700,
    height: 450,
    minWidth: 500,
    minHeight: 100,
    title: 'Untitled',
    webPreferences: {
      preload: path.join(__dirname, '../preload/index.mjs'),
      sandbox: false,
    },
  });

  mainWindow.webContents.setWindowOpenHandler(details => {
    shell.openExternal(details.url);

    return {
      action: 'deny',
    };
  });

  if (isDevelop && env.ELECTRON_RENDERER_URL != null) {
    mainWindow.loadURL(env.ELECTRON_RENDERER_URL);
  } else {
    mainWindow.loadFile(path.join(__dirname, '../renderer/index.html'));
  }
}

app.whenReady().then(() => createWindow());

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

app.on('window-all-closed', () => {
  if (!isMac) {
    app.quit();
  }
});
