import { z } from 'zod'
import { species } from './data/species.js'

export const plantSchema = z.object({
  id: z.string().min(1),
  nickname: z.string().min(1).max(60),
  speciesId: z.string().min(1),
  lastWateredAt: z.iso.datetime(),
  waterEveryDays: z.number().int().positive().max(365).optional(),
})

export type Plant = z.infer<typeof plantSchema>

export type ScheduleEntry = {
  plantId: string
  nickname: string
  nextWaterAt: string
  overdue: boolean
}

const DAY_MS = 24 * 60 * 60 * 1000

export function buildSchedule(plants: Plant[], now = new Date()): ScheduleEntry[] {
  return plants
    .map((plant) => {
      const interval =
        plant.waterEveryDays ??
        species.find((s) => s.id === plant.speciesId)?.waterEveryDays ??
        7
      const next = new Date(new Date(plant.lastWateredAt).getTime() + interval * DAY_MS)
      return {
        plantId: plant.id,
        nickname: plant.nickname,
        nextWaterAt: next.toISOString(),
        overdue: next.getTime() < now.getTime(),
      }
    })
    .sort((a, b) => a.nextWaterAt.localeCompare(b.nextWaterAt))
}
