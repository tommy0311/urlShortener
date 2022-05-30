const express = require('express')
const router = express.Router()

const UrlShortener = require('../../models/urlShortener')

const expressHost = process.env.EXPRESS_HOST || 'localhost'
const expressPort = process.env.EXPRESS_PORT || 3000;
const expressURL = "http://" + expressHost + ":" + expressPort + "/"

router.get("/", (req, res) => {
  res.render("index")
});

router.get("/:shortURL", async (req, res) => {
  const shortURL = req.params.shortURL

  let sqlResult = {}
  try {
    sqlResult = await UrlShortener.findOne({ short_url: shortURL }).lean()
    if( sqlResult ){
      res.redirect(301, sqlResult.input_url);
      return
    }

    res.redirect('/')
  }
  catch( error ) {
    console.log(error)
    res.redirect('/')
  }


});

module.exports = router