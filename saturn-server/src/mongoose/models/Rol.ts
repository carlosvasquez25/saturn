import { model, Schema, Model, Document } from 'mongoose'

export interface IRol extends Document {
  name: string
  scopes: string[]
}

export const RolSchema: Schema = new Schema({
  name: { type: String, required: true },
  scopes: { type: [{ type: String }], required: true }
})

export const Rol: Model<IRol> = model('Rol', RolSchema)