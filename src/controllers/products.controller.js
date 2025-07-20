import { ProductService } from '../services/products.service.js';

/** obtengo lista de productos */
export const getProducts = async (req, res) => {
  try {
    const service = new ProductService();
    const products = await service.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener productos' });
  }
};

/** obtengo producto por ID */
export const getProduct = async (req, res) => {
  try {
    const service = new ProductService();
    const product = await service.getById(req.params.id);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener producto' });
  }
};

/** crear un nuevo producto */
export const createProduct = async (req, res) => {
  try {
    const service = new ProductService();
    const productId = await service.create(req.body);
    res.status(201).json({ id: productId });
  } catch (error) {
    res.status(500).json({ error: 'Error al crear producto' });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const service = new ProductService();
    const product = await service.update(req.params.id, req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: `Error al actualizar producto ${error}` });
  }
};

/** eliminar un producto */
export const deleteProduct = async (req, res) => {
  try {
    const service = new ProductService();
    await service.delete(req.params.id);
    res.json({ msg: `Producto con ID: ${req.params.id} eliminado` });
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar producto' });
  }
};
