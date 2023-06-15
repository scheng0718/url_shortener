const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const routes = require('./routes')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
mongoose.connect(process.env.MONGODB_URI, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})

db.once('open', () => {
  console.log('mongodb connected!')
})

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