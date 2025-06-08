import { Elysia, t } from 'elysia'
import { getHello } from '../controllers/index.controller'

export const IndexRoute = new Elysia({ prefix: '/api' })
 .get('/hello', getHello)
 .post('/hello', ({ body }) => {
  return {
   message: `Hola, ${body.name}`
  }
 }, {
  body: t.Object({
   name: t.String()
  })
 })