import { Router } from 'express'
import User from '../models/User.js'

const router = Router()

router.get('/', async (_request, response) => {
  const users = await User.find().select('-passwordHash').sort({ name: 1 })
  response.json(users)
})

export default router