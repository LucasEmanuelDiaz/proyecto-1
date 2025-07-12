import { Router } from 'express'
import { getProducts, getProduct, createProduct, deleteProduct } from '../controllers/products.controller.js'

const router = Router()

// obtener lista de productos
router.get('/', getProducts)

// obtengo producto por ID
router.get('/:id', getProduct)

// crear un nuevo producto (placeholder)
router.post('/create', createProduct)

// eliminar un producto (placeholder)
router.delete('/:id', deleteProduct)

export { router as productsRouter }