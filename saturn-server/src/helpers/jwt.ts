import jwt from 'jsonwebtoken'

export interface ITokenContent {
  id: string,
  iat: number,
  exp: number
}

export function create (id: string) : string {
  return jwt.sign({ id }, process.env.SECRETKEY as string, { expiresIn: 60 * 60 })
}

export function validate (token: string) : ITokenContent | null {
  try {
    // Validar el JWT
    const tk: ITokenContent = jwt.verify(token, process.env.SECRETKEY as string) as ITokenContent
    return tk
  } catch (error) {
    return null
  }
}