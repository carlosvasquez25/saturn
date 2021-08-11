import { Request, Response } from 'express'
import { ITokenContent, create, validate } from '../helpers/jwt'
import { User, IUser } from '../mongoose/models/User'
import { IRol } from '../mongoose/models/Rol'
const propertiesUser: Array<string> = ['names', 'surnames', 'email', 'rol', 'createdAt', 'modifiedAt']
const propertiesRol: Array<string> = ['name', 'scopes']

export function signup (req: Request, res: Response): void {
  console.log({ req, res })
}

export async function signin (req: Request, res: Response): Promise<void> {
  // Verificar si existe un usuario con el correo recibido
  const userFind : IUser | null = await User.findOne({ email: req.body.email }).populate('rol')
  if (userFind != null) {
    if (userFind.pass == req.body.pass) {
      res.setHeader('authorization', `Bearer ${create(userFind._id)}`).json()
    } else {
      res.status(403).send()
    }
  } else {
    res.status(401).send()
  }
}

export async function profile (req: Request, res: Response): Promise<void> {
  // Validar el JWT
  const token : ITokenContent | null = validate(req.headers['authorization']?.replace('Bearer ', '') as string)
  if (token != null) {
    // Obtener el usuario
    const userFind : IUser | null = await User.findById(token.id).populate('rol')
    const userResponse: any = {}
    const rolResponse: any = {}
    propertiesUser.forEach(prop => {
      userResponse[prop] = userFind?.get(prop)
    })
    console.log(userResponse)
    propertiesRol.forEach(prop => {
      rolResponse[prop] = userResponse['rol'][prop]
    })
    userResponse['rol'] = rolResponse
    // Retornamos el perfil y el token actualizado
    res.setHeader('authorization', `Bearer ${create(token.id)}`).json(userResponse)
  } else {
    res.status(401).send()
  }
}