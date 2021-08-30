import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import palabras from '../../palabras'

const newGameSchema = new mongoose.Schema(
    {
        solution: word
    }
)

export const NewGame = mongoose.model('newGame', newGameSchema)