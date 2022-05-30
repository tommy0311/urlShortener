const express = require('express')
const router = express.Router()
const UrlShortener = require('../../models/urlShortener')

const expressHost = process.env.EXPRESS_HOST || 'localhost'

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

router.get("/:shortURL", (req, res) => {
  const shortURL = "http://" + expressHost + "/" + req.params.shortURL

  res.render("result", { shortURL })
});

//create shorten URL
router.post('/', async (req, res) => {
  //console.log(req.body)
  
  let randomUrl = ''
  let sqlResult = {}
  try {
    //Is inputURL existed or not
    sqlResult = await UrlShortener.findOne({ input_url: req.body.inputURL }).lean()

    if( sqlResult ){
      //res.render("result", { shortURL: sqlResult.short_url })
      res.redirect(`/result/${sqlResult.short_url}`)
      return
    }

    do{
      randomUrl = generateShortUrl(5)
      //Is randomUrl existed or not
      sqlResult = await UrlShortener.findOne({ short_url: randomUrl }).lean()
    } while( sqlResult )

    const newShortURL = {
      "short_url": randomUrl,
      "input_url": req.body.inputURL,
    }

    await UrlShortener.create(newShortURL)

    res.redirect(`/result/${newShortURL.short_url}`)
  }
  catch( error ) {
    console.log(error)
    res.redirect('/')
  }
  
})
module.exports = router