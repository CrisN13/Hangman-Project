const Router =  require('express')
const startGame = require('./NewGame.Controller')

const router = Router()

router.post('/', startGame)

exports.router