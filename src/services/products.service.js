import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc
} from 'firebase/firestore/lite'

const productsCol = collection(db, 'products')

/** Obtiene todos los productos */
export const getAllProducts = async () => {
  const snapshot = await getDocs(productsCol)
  return snapshot.docs.map(d => ({ id: d.id, ...d.data() }))
}

/** Obtiene un producto por su ID */
export const getProductById = async (id) => {
  const ref = doc(db, 'products', id)
  const snapshot = await getDoc(ref)

  if (!snapshot.exists()) {
    throw new Error('Producto no encontrado')
  }

  return { 
    id: snapshot.id, 
    ...snapshot.data() 
  }
}

/** Crea un nuevo producto y devuelve su ID */
export const addProduct = async (data) => {
  const ref = await addDoc(productsCol, data)
  return ref.id
}

/** Elimina un producto por su ID */
export const deleteProductById = async (id) => {
  const ref = doc(db, 'products', id)
  await deleteDoc(ref)
}