import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

const newGameSchema = new mongoose.Schema(
    {
        guessWord = String
    }
)

export const NewGame = mongoose.model('newGame', newGameSchema)