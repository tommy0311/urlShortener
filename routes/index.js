const express = require('express')
const router = express.Router()

const home = require('./modules/home')
router.use('/', home)

const result = require('./modules/result')
router.use('/result', result)

module.exports = router