import { Router } from 'express'
import { register, login, logout } from '../controllers/auth.controller.js'

const router = Router()

// registrar un nuevo usuario
router.post('/register', register)

// iniciar sesión
router.post('/login', login)

// cerrar sesión
router.post('/logout', logout)

export { router as authRouter }