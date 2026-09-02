import { Router } from 'express'
import Leaderboard from '../models/Leaderboard.js'

const router = Router()

router.get('/', async (_request, response) => {
  const leaderboard = await Leaderboard.find()
    .populate('user', 'name')
    .populate('team', 'name color')
    .sort({ rank: 1 })
  response.json(leaderboard)
})

export default router