const express =  require('express')
const {gHint} = require('./GetHint.Controller')

const getHint = express.Router()

getHint.post('/', gHint)

exports.getHint = getHint