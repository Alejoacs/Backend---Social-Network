import { Elysia } from "elysia"
import { registerUser, loginUser } from "../controllers/auth.controller"

export const AuthRoute = new Elysia({ prefix: "/api/auth" })
 .post('/register', registerUser)
 .post('/login', loginUser)