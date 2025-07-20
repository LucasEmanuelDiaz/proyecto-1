import { Router } from 'express';
import { getProducts, getProduct, createProduct, updateProduct, deleteProduct } from '../controllers/products.controller.js';

const router = Router();

// obtener lista de productos
router.get('/', getProducts);

// obtengo producto por ID
router.get('/:id', getProduct);

// crear un nuevo producto
router.post('/create', createProduct);

// actualizar un producto
router.put('/:id', updateProduct);

// eliminar un producto
router.delete('/:id', deleteProduct);

export { router as productsRouter };