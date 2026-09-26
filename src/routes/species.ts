import { Router } from 'express'
import { species } from '../data/species.js'

export const speciesRouter = Router()

speciesRouter.get('/', (req, res) => {
  const q = typeof req.query.q === 'string' ? req.query.q.toLowerCase() : ''
  const results = q
    ? species.filter(
        (s) =>
          s.commonName.toLowerCase().includes(q) ||
          s.botanicalName.toLowerCase().includes(q),
      )
    : species
  res.json({ species: results })
})

speciesRouter.get('/:id', (req, res) => {
  const match = species.find((s) => s.id === req.params.id)
  if (!match) {
    res.status(404).json({ error: 'species_not_found' })
    return
  }
  res.json({ species: match })
})
