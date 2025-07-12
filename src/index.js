import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { productsRouter } from './routes/products.routes.js'
import { authRouter } from './routes/auth.routes.js'

dotenv.config()
const app = express()

app.use(cors()) // middleware para permitir cualquier origen
app.use(express.json()) // middleware para parsear el cuerpo de las peticiones como JSON

// obtenemos puerto y ruta base
const PORT = process.env.PORT || 3000
const API_URL = process.env.API_URL || '/'

app.use(`${API_URL}/products`, productsRouter)
app.use(`${API_URL}/auth`, authRouter)

// middleware catch-all para 404
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada' 
  })
})

app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))

