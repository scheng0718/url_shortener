function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length)
  return array[randomIndex]
}
function generateShortId() {
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase()
  const numbers = '0123456789'
  let collections = []
  collections = collections.concat(lowerCaseLetters.split('')).concat(upperCaseLetters.split('')).concat(numbers.split(''))
  let shortId = ''
  for (let i = 0; i < 5; i++) {
    shortId += sample(collections)
  }
  return shortId
}
module.exports = generateShortId