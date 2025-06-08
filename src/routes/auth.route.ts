import { Elysia } from "elysia"
import { registerUser } from "../controllers/auth.controller"

export const AuthRoute = new Elysia({ prefix: "/api/auth" })
 .post('/register', registerUser)