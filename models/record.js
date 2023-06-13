const mongoose = require('mongoose')
const { Schema } = mongoose
const urlSchema = new Schema({
  url: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('UrlRecord', urlSchema)
