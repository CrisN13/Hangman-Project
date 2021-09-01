const express =  require('express')
const {gSolution} = require('./GetSolution.Controller')

const getSolution = express.Router()

getSolution.post('/', gSolution)

exports.getSolution = getSolution