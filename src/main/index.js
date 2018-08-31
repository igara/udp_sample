'use strict'

import { app, BrowserWindow, screen, Menu } from 'electron'
const ioHook = require('iohook')

const PORT = 33333
const HOST = '127.0.0.1'

const dgram = require('dgram')
const message = Buffer.from('command line\n')

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
let menu
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  const size = screen.getPrimaryDisplay().size // ディスプレイのサイズを取得する
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    left: 0,
    top: 0,
    width: size.width,
    height: size.height,
    frame: false,
    show: true,
    transparent: true,
    resizable: false
    // アプリケーション起動した時に先頭に表示する
    // 'always-on-top': true
  })
  mainWindow.setIgnoreMouseEvents(true)
  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })

  menu = Menu.buildFromTemplate([
    {
      label: 'udp_sample',
      submenu: [
        {label: 'Exit', click: onExit}
      ]
    }
  ])

  Menu.setApplicationMenu(menu)
  mainWindow.setMenu(menu)

  ioHook.start()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('browser-window-blur', () => {
  // 常に先頭に表示する
  // mainWindow.setAlwaysOnTop(true)
})

app.on('blur', () => {
  // 常に先頭に表示する
  // mainWindow.setAlwaysOnTop(true)
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * どこのアプリケーションでもマウスをクリックしたとき
 */
ioHook.on('mouseclick', event => {
  const client = dgram.createSocket('udp4')
  /**
   * コマンドを送信する
   */
  client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
    if (err) throw err
    console.log(`UDP message sent to ${HOST}:${PORT}`)
    client.close()
  })
})

function onExit () {
  app.quit()
}
