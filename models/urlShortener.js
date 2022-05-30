const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-type-url');

const urlShortenerSchema = new Schema({
  short_url: {
    type: String,
    required: true
  },
  input_url: {
    type: mongoose.SchemaTypes.Url,
    required: true
  }
})

// mongoose.model('CollectionName', SchemaName )
module.exports = mongoose.model('UrlShortener', urlShortenerSchema)