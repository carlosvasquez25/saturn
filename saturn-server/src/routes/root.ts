import { Router } from 'express'

const router : Router = Router()

router.get('/', (_, res) => {
  res.send({
    version: '0.0.1',
    name: 'saturn-server',
    guid: '1111-1111-1111-1111',
    status: 'loading'
  })
})

export default router