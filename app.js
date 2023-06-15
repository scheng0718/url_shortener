const express = require('express')
const exphbs = require('express-handlebars')
const routes = require('./routes')
require('./config/mongoose')
const app = express()

app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs'}))
app.set('view engine', 'hbs' )
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(routes)
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Internal Error')
})

app.listen(3000, () => {
  console.log(`The server is listening at http://localhost:3000`)
})