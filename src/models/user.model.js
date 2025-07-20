import { db } from '../config/firebase.js';
import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc
} from 'firebase/firestore/lite';
const USERS_COLLECTION = 'users';
const usersCol = collection(db, USERS_COLLECTION);

export class UserModel {
  async register({ email, passwordHash, name }) {
    const userData = { email, passwordHash, name };
    await addDoc(usersCol, userData);

    return this.getByEmail(email);
  }

  async getByEmail(email) {
    const querySnapshot = await getDocs(usersCol);
    const userDoc = querySnapshot.docs.find(doc => doc.data().email === email);
    if (userDoc) {
      return { id: userDoc.id, ...userDoc.data() };
    }
    return null;
  }

  async userExists(email) { //retorna boolean
    const querySnapshot = await getDocs(usersCol);
    return querySnapshot.docs.some(doc => doc.data().email === email);
  }
}