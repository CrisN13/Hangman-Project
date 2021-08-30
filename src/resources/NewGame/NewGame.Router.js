import { Router } from 'express'
import { startGame } from './NewGame.Controller'

const router = Router()

router.post('/', startGame)

export default router