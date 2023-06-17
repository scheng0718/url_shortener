const Url = require('../models/record')

function generateShortId(shortenUrlLength) {
  const combinations = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let shortId = ''
  for (let i = 0; i < shortenUrlLength; i++) {
    const randomIndex = Math.floor(Math.random() * combinations.length)
    shortId += combinations[randomIndex]
  }
  return shortId
}
// 產生五位數亂碼 -> 利用亂碼findOne()查詢資料庫-> 如果有存在，重新產生五位數亂碼 -> 如果不存在就直接使用
function generateUniqueShortId() {
  const shortUrl = generateShortId(5)
  return Url.findOne({ shortUrl: shortUrl })
    .lean()
    .then(record => {
      if (record !== null) {
        // console.log('Duplicated shortUrl. Regenerated!')
        return generateUniqueShortId()
      }
      // console.log('No duplicate')
      return shortUrl
    })
}
module.exports = generateUniqueShortId