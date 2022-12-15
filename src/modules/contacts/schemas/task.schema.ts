import { Schema } from 'mongoose'

export const ContactSchema = new Schema({
  name: String,
  phone: Number
})
