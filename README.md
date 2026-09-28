# Plant care API

Backend for the plant care app on iOS and Android. It serves the species
catalog and works out when each plant is next due for water.

## Running it

```bash
npm install
npm run dev
```

The API listens on port 3000, or `PORT` if it is set.

## Endpoints

- `GET /health`
- `GET /v1/species` — the catalog, with optional `?q=` search
- `GET /v1/species/:id` — one species
- `POST /v1/schedule` — takes a list of plants and returns when each one
  needs watering next, soonest first

`POST /v1/schedule` body:

```json
{
  "plants": [
    {
      "id": "p1",
      "nickname": "Big monstera",
      "speciesId": "monstera",
      "lastWateredAt": "2026-09-20T09:00:00.000Z"
    }
  ]
}
```

`waterEveryDays` on a plant overrides the species default.

## Layout

- `src/index.ts` — app setup and routes
- `src/routes/` — one file per resource
- `src/schedule.ts` — plant shape and the schedule calculation
- `src/data/species.ts` — the species catalog
