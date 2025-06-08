import { app } from './app';
import { connectToDatabase } from './config/mongo';

connectToDatabase().then(() => {
 app.listen(3000, () => {
  console.log('🔥 Servidor corriendo en http://localhost:3000')
 })
})