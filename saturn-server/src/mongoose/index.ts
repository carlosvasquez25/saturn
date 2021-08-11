import dotenv = require('dotenv')
import { connect } from 'mongoose'
dotenv.config()

connect(process.env.DATABASE_URL as string, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }).then(() => {
  console.log('Database is connected')
})