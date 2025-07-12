import { getAllProducts, getProductById, addProduct, deleteProductById } from '../services/products.service.js'

/** obtengo lista de productos */
export const getProducts = async (req, res) => {
  try {
    const products = await getAllProducts()
    res.json(products)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' })
  }
}

/** obtengo producto por ID */
export const getProduct = async (req, res) => {
  try {
    const product = await getProductById(req.params.id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' })
  }
}

/** crear un nuevo producto (placeholder) */
export const createProduct = async (req, res) => {
  try {
    const productId = await addProduct(req.body)
    res.status(201).json({ id: productId })
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' })
  }
}

/** eliminar un producto (placeholder) */
export const deleteProduct = async (req, res) => {
  try {
    await deleteProductById(req.params.id)
    res.json({ msg: `Producto con ID: ${req.params.id} eliminado` })
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' })
  }
}
