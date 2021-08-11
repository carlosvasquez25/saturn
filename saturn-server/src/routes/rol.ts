import { Router } from 'express'

const router : Router = Router()

router.post('/rol', async (req, res) => {
  res.status(200).send()
})

export default router