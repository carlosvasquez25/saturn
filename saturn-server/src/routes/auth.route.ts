import { Router } from 'express'
import { signup, signin, profile } from '../controllers/auth.controller'

const router : Router = Router()



router.post('/signup', signup)
router.post('/signin', signin)
router.post('/profile', profile)

export default router