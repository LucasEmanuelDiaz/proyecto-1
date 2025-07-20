import { ProductModel } from "../models/product.model.js";

export class ProductService {
  productModel = new ProductModel();

  /** Obtiene todos los productos */
  async getAll() {
    return await this.productModel.getAll();
  }

  /** Obtiene un producto por su ID */
  async getById(id) {
    return await this.productModel.getById(id);
  }

  /** Crea un nuevo producto y devuelve su ID */
  async create(data) {
    return await this.productModel.create(data);
  }

  /** Actualiza un producto por su ID */
  async update(id, data) {
    return await this.productModel.update(id, data);
  }

  /** Elimina un producto por su ID */
  async delete(id) {
    return await this.productModel.delete(id);
  }
}
