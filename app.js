const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('This is url shortener project')
})

app.listen(3000, () => {
  console.log(`The server is listening at http://localhost:3000`)
})