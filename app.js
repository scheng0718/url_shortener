const express = require('express')
const mongoose = require('mongoose')
const exphbs = require('express-handlebars')
const Url = require('./models/record')
const generateShortId = require('./generate_shortId')

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
app.use(express.urlencoded({ extended: true }))
// 首頁路由
app.get('/', (req, res) => {
  res.render('index')
})
// 短網址轉址頁面
app.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  Url.findOne({shortUrl})
    .then(url => {
      const originalUrl = url.originalUrl
      res.redirect(originalUrl)
    })
    .catch(error => console.error(error))
})
// 處理縮網址的 POST 請求
app.post('/urls', (req, res) => {
  const originalUrl = req.body.url
  Url.find({originalUrl})
    .lean()
    .then(url => {
      if (url.length !== 0) {
        console.log('URL is existing in the database already')
        const shortUrl = url[0].shortUrl
        res.render('result', {shortUrl})
      } else {
        console.log('URL is not existing in the database')
        const shortUrl = generateShortId()
        Url.create({originalUrl, shortUrl})
        res.render('result', {shortUrl})
      }
    })
    .catch(error => console.error(error))
})

app.listen(3000, () => {
  console.log(`The server is listening at http://localhost:3000`)
})