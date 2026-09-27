import { Router } from 'express'
import { z } from 'zod'
import { buildSchedule, plantSchema } from '../schedule.js'

export const scheduleRouter = Router()

const bodySchema = z.object({
  plants: z.array(plantSchema).max(200),
})

scheduleRouter.post('/', (req, res) => {
  const parsed = bodySchema.safeParse(req.body)
  if (!parsed.success) {
    res.status(400).json({ error: 'invalid_body', issues: parsed.error.issues })
    return
  }
  res.json({ schedule: buildSchedule(parsed.data.plants) })
})
