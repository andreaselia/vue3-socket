# Vue v3 Socket.IO

A simple Vue.js v3 plugin for Socket.IO

## Install

```bash
npm install vue3-socket.io
```

```vue
import Vue3SocketIO from 'vue3-socket.io'

const app = createApp(App)

// options is optional
app.use(Vue3SocketIO, {
    connection: 'http://localhost:8080',
    options: {}
})

app.mount('#app')
```

## Configuration

The `options` parameter is the standard client options which can be found at the link below.

https://socket.io/docs/v3/client-api/#io-url-options
