const express = require('express')
const router = express.Router()
const Url = require('../../models/record')

// 首頁路由
router.get('/', (req, res) => {
  res.render('index')
})
// 短網址轉址頁面
router.get('/:shortUrl', (req, res) => {
  const { shortUrl } = req.params
  Url.findOne({shortUrl})
    .then(url => {
      const host = req.headers.host
      if (!url) {
        res.render('error', {
          errorMsg: 'The short URL is invalid! Please check again',
          errorURL: 'http://' + host + '/' + shortUrl
        })
      } else {
        const originalUrl = url.originalUrl
        res.redirect(originalUrl)
      }
    })
    .catch(error => console.error(error))
})

module.exports = router
