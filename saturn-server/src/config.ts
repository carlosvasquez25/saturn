import './mongoose'
import { Rol, IRol } from './mongoose/models/Rol'
import { User, IUser } from './mongoose/models/User'

Rol.countDocuments().then(number => {
  if (number < 1) {
    console.log('Not root user found...')
    const rol: IRol = new Rol({ name: 'root', scopes: ['all'] })
    rol.save().then(rolSave => {
      const user: IUser = new User({
        names: 'Saturn',
        surnames: 'Report',
        email: 'saturn@report',
        pass: '3b0ffa60f7b46f61755b4b2090f1d4af8bdc671c217734c66b48b5309d5421eb',
        rol: rolSave._id
      })
      user.save().then(() => {
        console.log('Root user created!')
      })
    })
  }
})