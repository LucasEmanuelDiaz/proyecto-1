import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()
const app = express()

// middleware para permitir cualquier origen
app.use(cors())

// middleware para parsear el cuerpo de las peticiones como JSON
app.use(express.json())

// ejemplo de ruta
app.get('/api/products', (req, res) => {
  res.json({ msg: 'Lista de productos' })
})

// middleware catch-all para 404
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Ruta no encontrada' 
  })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`))

