function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
function generateShortId(shortenUrlLength) {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  let collections = []
  collections = collections.concat([...lowerCaseLetters]).concat([...upperCaseLetters]).concat([...numbers])
  let shortId = ''
  for (let i = 0; i < shortenUrlLength; i++) {
    shortId += sample(collections)
  }
  return shortId
}
module.exports = generateShortId