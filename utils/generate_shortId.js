function generateShortId(shortenUrlLength) {
  const combinations = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let shortId = ''
  for (let i = 0; i < shortenUrlLength; i++) {
    const randomIndex = Math.floor(Math.random() * combinations.length)
    shortId += combinations[randomIndex]
  }
  return shortId
}
module.exports = generateShortId