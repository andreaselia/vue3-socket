import io from 'socket.io-client'

const Vue3SocketIO = {
  install: (app, { connection, options }) => {
    const socket = io(connection, options)

    app.config.globalProperties.$socket = socket

    app.provide('socket', socket)
  }
}

export default Vue3SocketIO
