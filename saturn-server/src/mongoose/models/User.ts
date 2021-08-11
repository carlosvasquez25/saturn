import { model, Schema, Model, Document, HookNextFunction } from 'mongoose'

export interface IUser extends Document {
  names: string
  surnames: string
  email: string
  pass: string
  rol: Schema.Types.ObjectId
  createdAt: Date
  modifiedAt: Date
}

const UserSchema: Schema = new Schema({
  names: { type: String, required: true },
  surnames: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true },
  pass: { type: String, required: true },
  rol: { type: Schema.Types.ObjectId, ref: 'Rol' },
  createdAt: { type: Date, required: false },
  modifiedAt: { type: Date, required: false }
}).pre('save', function(next: HookNextFunction){
  if (this) {
    const doc = <IUser>this
    const now = new Date()
    if (!doc.createdAt) {
      doc.createdAt = now
    }
    doc.modifiedAt = now
  }
  next()
})

export const User: Model<IUser> = model('User', UserSchema, 'users')