/** obtengo lista de productos */
export const getProducts = (req, res) => {
  res.json({ msg: 'Lista de productos' })
}

/** obtengo producto por ID */
export const getProduct = (req, res) => {
  const { id } = req.params
  res.json({ msg: `Producto con ID: ${id}` })
}

/** crear un nuevo producto (placeholder) */
export const createProduct = (req, res) => {
  res.status(201).json({ msg: 'Producto creado' })
}

/** eliminar un producto (placeholder) */
export const deleteProduct = (req, res) => {
  const { id } = req.params
  res.json({ msg: `Producto con ID: ${id} eliminado` })
}