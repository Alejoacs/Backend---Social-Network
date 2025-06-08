import { MongoClient } from "mongodb"

const uri = process.env.MONGODBURL
if (!uri) {
 throw new Error("MONGODBURL environment variable is not defined");
}
const client = new MongoClient(uri)

export const db = client.db('social network')

export const connectToDatabase = async () => {
 try {
  await client.connect()
  console.log('☑️ Conectado a MongoDB')
 } catch (error) {
  console.error('✖️ Error al conectar a MongoDB:', error)
  process.exit(1)
 }
}