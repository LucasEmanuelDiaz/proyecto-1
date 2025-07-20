import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  updateDoc,
  doc,
  getDoc,
  addDoc,
  deleteDoc
} from 'firebase/firestore/lite';
const productsCol = collection(db, 'products');

/** Modelo de producto */
export class ProductModel {
  async getAll() {
    const snapshot = await getDocs(productsCol);
    return snapshot.docs.map(d => ({ id: d.id, ...d.data() }));
  }

  async getById(id) {
    const ref = doc(db, 'products', id);
    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      throw new Error('Producto no encontrado');
    }

    return {
      id: snapshot.id,
      ...snapshot.data()
    };
  }

  async create(data) {
    const ref = await addDoc(productsCol, data);
    return ref.id;
  }

  async update(id, data) {
    console.log('Updating product with ID:', id, 'with data:', data);
    const ref = doc(db, 'products', id);
    await updateDoc(ref, data);
    return ref.id;
  }

  async delete(id) {
    const ref = doc(db, 'products', id);
    await deleteDoc(ref);
  }
}