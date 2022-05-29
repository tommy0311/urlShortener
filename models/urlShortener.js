const mongoose = require('mongoose')
const Schema = mongoose.Schema
require('mongoose-type-url');

const urlShortenerSchema = new Schema({
  url_id: {
    type: Number,
    required: true
  },
  short_url: {
    type: String,
    required: true
  },
  url: {
    type: mongoose.SchemaTypes.Url,
    required: true
  }
})

// mongoose.model('CollectionName', SchemaName )
module.exports = mongoose.model('UrlShortener', urlShortenerSchema)