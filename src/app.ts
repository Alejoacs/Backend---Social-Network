import { Elysia } from 'elysia'
import { cors } from '@elysiajs/cors'
import { IndexRoute } from './routes/index.route'
import { AuthRoute } from './routes/auth.route'

export const app = new Elysia()
 .use(cors())
 .use(IndexRoute)
 .use(AuthRoute)