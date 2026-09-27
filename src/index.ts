import express from 'express'
import { scheduleRouter } from './routes/schedule.js'
import { speciesRouter } from './routes/species.js'

const app = express()
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ ok: true })
})

app.use('/v1/species', speciesRouter)
app.use('/v1/schedule', scheduleRouter)

const port = Number(process.env.PORT ?? 3000)
app.listen(port, () => {
  console.log(`plant-care-api listening on :${port}`)
})
