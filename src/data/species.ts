export type Species = {
  id: string
  commonName: string
  botanicalName: string
  light: 'low' | 'medium' | 'bright-indirect' | 'direct'
  waterEveryDays: number
  notes: string
}

export const species: Species[] = [
  {
    id: 'monstera',
    commonName: 'Swiss cheese plant',
    botanicalName: 'Monstera deliciosa',
    light: 'bright-indirect',
    waterEveryDays: 7,
    notes: 'Let the top few centimetres of soil dry out between waterings.',
  },
  {
    id: 'snake-plant',
    commonName: 'Snake plant',
    botanicalName: 'Dracaena trifasciata',
    light: 'low',
    waterEveryDays: 21,
    notes: 'Tolerates neglect. Overwatering is the usual way to lose one.',
  },
  {
    id: 'pothos',
    commonName: 'Golden pothos',
    botanicalName: 'Epipremnum aureum',
    light: 'medium',
    waterEveryDays: 10,
    notes: 'Leaves droop when it is thirsty and recover within a day.',
  },
  {
    id: 'fiddle-leaf-fig',
    commonName: 'Fiddle-leaf fig',
    botanicalName: 'Ficus lyrata',
    light: 'bright-indirect',
    waterEveryDays: 8,
    notes: 'Dislikes being moved. Brown spots usually mean too much water.',
  },
  {
    id: 'zz-plant',
    commonName: 'ZZ plant',
    botanicalName: 'Zamioculcas zamiifolia',
    light: 'low',
    waterEveryDays: 18,
    notes: 'Stores water in its rhizomes. Water only when the soil is fully dry.',
  },
  {
    id: 'calathea',
    commonName: 'Prayer plant',
    botanicalName: 'Goeppertia orbifolia',
    light: 'medium',
    waterEveryDays: 5,
    notes: 'Keep the soil lightly moist. Crispy edges mean the air is too dry.',
  },
  {
    id: 'spider-plant',
    commonName: 'Spider plant',
    botanicalName: 'Chlorophytum comosum',
    light: 'medium',
    waterEveryDays: 7,
    notes: 'Brown tips are common and harmless.',
  },
  {
    id: 'aloe',
    commonName: 'Aloe',
    botanicalName: 'Aloe vera',
    light: 'direct',
    waterEveryDays: 21,
    notes: 'Needs a pot that drains well.',
  },
]
