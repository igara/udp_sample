const PORT = 33333
const HOST = '0.0.0.0'

const dgram = require('dgram')
const server = dgram.createSocket('udp4')

/**
 * clientとの接続開始
 */
server.on('listening', () => {
  const address = server.address()
  console.info(`UDP Server listening on ${address.address}:${address.port}`)
})

/**
 * clientからメッセージを取得したとき
 */
server.on('message', (message, remote) => {
  console.info(`${remote.address}:${remote.port}`)
  console.info('----- message -----')
  console.info(message.toString())
  console.info('-------------------')
})

/**
 * コネクションエラー
 */
server.on('error', (exception) => {
  console.error(exception)
})

/**
 * 接続が切れたとき
 */
server.on('close', () => {
  console.info('')
})

/**
 * server起動
 */
server.bind(PORT, HOST, () => {
  server.setMulticastLoopback(true)
})
