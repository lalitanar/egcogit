const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World here is thew update...egci341'))

app.listen(3000, () => console.log('server start'))

