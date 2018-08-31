const PORT = 33333
const HOST = '127.0.0.1'

const dgram = require('dgram')
const message = Buffer.from('command line\n')

const client = dgram.createSocket('udp4')

/**
 * コマンドを送信する
 */
client.send(message, 0, message.length, PORT, HOST, (err, bytes) => {
  if (err) throw err
  console.log(`UDP message sent to ${HOST}:${PORT}`)
  client.close()
})
