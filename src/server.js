import express from 'express'
const app = express()
import series from './routes/series.js'

const port = process.env.PORT || 8000

app.use(express.json())
app.use('/series', series)

app.listen(port, async () => {
    console.log(`Servidor escutando em http://localhost:${port}`)
})

export default app