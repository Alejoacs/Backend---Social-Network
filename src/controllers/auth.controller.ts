import { db } from "../config/mongo"
import type { User } from "../models/user.model"

export const registerUser = async ({ body }: { body: User }) => {
 const { name, email, password } = body
 const usersCollection = db.collection<User>("users")

 const existingUser = await usersCollection.findOne({ email: email.toLowerCase() })
 if (existingUser) {
  return {
   error: 'Ya existe un usuario con ese correo electrónico.'
  }
 }

 const result = await usersCollection.insertOne({
  _id: "",
  name,
  email: email.toLowerCase(),
  password,
  createdAt: new Date()
 })

 return {
  message: 'Usuario registrado exitosamente.',
  user: {
   _id: result.insertedId.toString(),
   name,
   email: email.toLowerCase(),
   createdAt: new Date()
  }
 }
}

