import { db } from "../config/mongo"
import { hashPassword, comparePassword } from "../utils/bcrypt"
import type { User } from "../models/user.model"

export const registerUser = async ({ body }: { body: User }) => {
 const { name, email, password } = body
 const usersCollection = db.collection<User>("users")

 const existingUser = await usersCollection.findOne({ email: email.toLowerCase() })
 if (existingUser) {
  return {
   error: 'This email already exists',
  }
 }

 const hashedPassword = await hashPassword(password)

 const { insertedId } = await usersCollection.insertOne({
  name,
  email: email.toLowerCase(),
  password: hashedPassword,
  isVerified: false,
  isAdmin: false,
  isBanned: {
   isBanned: false,
  },
  isPrivate: false,
  isOnline: false,
  followers: [],
  following: [],
  posts: [],
  likes: [],
  comments: [],
  bookmarks: [],
  stories: [],
  avatars: [],
  username: '@' + email.split('@')[0],
  bio: 'Hello, This is my new account!',
  createdAt: new Date()
 })

 return {
  message: 'Registered successful.',
  user: insertedId
 }
}

export const loginUser = async ({ body }: { body: { emailOrUsername: string; password: string } }) => {
 const { emailOrUsername, password } = body
 const usersCollection = db.collection<User>("users")

 // Try to find by email (case-insensitive) or username
 const user = await usersCollection.findOne({
  $or: [
   { email: emailOrUsername.toLowerCase() },
   { username: emailOrUsername.startsWith('@') ? emailOrUsername : '@' + emailOrUsername }
  ]
 })

 if (!user) {
  return {
   error: 'User not found',
  }
 }

 if (!(await comparePassword(password, user.password))) {
  return {
   error: 'Incorrect password',
  }
 }

 if (user.isBanned && user.isBanned.isBanned) {
  return {
   error: 'Your account is banned',
  }
 }

 await usersCollection.updateOne({ _id: user._id }, { $set: { isOnline: true } })

 return {
  message: 'Login successful',
  user: user._id
 }
}