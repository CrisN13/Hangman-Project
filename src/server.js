import express from 'express'

export const app = express()

app.disable('x-powered-by')

export const start = async () => {
    try {
        await connect()
        app.listen(config.port, () => {
            console.log('REST API on http://localhost:${config.port}')
        })
    } catch (err) {
        console.error(err)
    }
}