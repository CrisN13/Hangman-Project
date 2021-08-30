import express from 'express'

export const app = express()

app.disable('x-powered-by')

app.post('/hangman')

export const start = async () => {
    try {
        await app.listen(3000)
        console.log('Connected to port 3000!')
    } catch (err) {
        console.error(err)
    }
}