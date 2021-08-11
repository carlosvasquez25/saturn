import express, {Application} from 'express'
import morgan from 'morgan'

import rootRoutes from './routes/root'
import rolRoutes from './routes/rol'
import authRoutes from './routes/auth.route'

const app: Application = express()

// middlewares
app.use(morgan('combined'))
app.use(express.json())

// routes
app.use(rootRoutes)
app.use(rolRoutes)
app.use('/api/auth', authRoutes)

export default app