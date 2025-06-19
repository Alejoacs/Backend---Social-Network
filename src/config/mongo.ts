import { MongoClient } from "mongodb"

const uri = process.env.MONGODBURL
if (!uri) {
 throw new Error("MONGODBURL environment variable is not defined");
}
const client = new MongoClient(uri)

export const db = client.db('social_network')

export const connectToDatabase = async () => {
 try {
  await client.connect()
  console.log('☑️ Connected to MongoDB successfully')
 } catch (error) {
  console.error('✖️ Not connected to MongoDB:', error)
  process.exit(1)
 }
}