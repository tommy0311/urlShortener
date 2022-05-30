const express = require('express')
const router = express.Router()
const UrlShortener = require('../../models/urlShortener')

//Generate a random number between min and max, including both min and max
function generateRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Generate a random string with fixed length
function generateShortUrl(length) {
  // Map to store 62 possible characters
  let map = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
  let shorturl = [];
  let randomID = generateRandomInteger(0, (Math.pow(62,length)-1))

  // Convert given integer id to a base 62 number
  while (shorturl.length != length)
  {
    shorturl.push(map[randomID % 62]);
    randomID = Math.floor(randomID / 62);
  }

  // Reverse shortURL to complete base conversion
  shorturl.reverse();

  return shorturl.join("");
}

//create shorten URL
router.post('/', async (req, res) => {
  //console.log(req.body)
  
  let randomUrl = ''
  let result = {}
  try {
    //Is inputURL existed or not
    result = await UrlShortener.findOne({ input_url: req.body.inputURL }).lean()
    if( result ){
      return
    }

    do{
      randomUrl = generateShortUrl(5)
      //Is randomUrl existed or not
      result = await UrlShortener.findOne({ short_url: randomUrl }).lean()
    } while( result )
    console.log(randomUrl)

    const newShortURL = {
      "short_url": randomUrl,
      "input_url": req.body.inputURL,
    }

    await UrlShortener.create(newShortURL)

    res.redirect('/')
  }
  catch( error ) {
    console.log(error)
    res.redirect('/')
  }
  
})
module.exports = router