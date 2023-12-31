const express = require('express')
const router = express.Router()
const Url = require('../../models/record')
const generateUniqueShortId = require('../../utils/generate_shortId')
// 處理縮網址的 POST 請求
router.post('/', (req, res) => {
  const originalUrl = req.body.url
  Url.find({originalUrl})
    .lean()
    .then(url => {
      if (url.length !== 0) {
        // console.log('URL is existing in the database already')
        const shortUrl = url[0].shortUrl
        res.render('result', {shortUrl})
      } else {
        // console.log('URL is not existing in the database')
        generateUniqueShortId()
          .then(shortUrl => {
            Url.create({originalUrl, shortUrl})
            res.render('result', {shortUrl})
          })
          .catch(error => console.error(error))
      }
    })
    .catch(error => console.error(error))
})

module.exports = router
