// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import dotenv from 'dotenv'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

dotenv.config()

const { 
  FIREBASE_API_KEY, 
  FIREBASE_AUTH_DOMAIN, 
  FIREBASE_PROJECT_ID, 
  FIREBASE_STORAGE_BUCKET, 
  FIREBASE_MESSAGING_SENDER_ID, 
  FIREBASE_APP_ID, 
  FIREBASE_MEASUREMENT_ID 
} = process.env

console.log("FIREBASE_API_KEY", FIREBASE_API_KEY)
console.log("FIREBASE_AUTH_DOMAIN", FIREBASE_AUTH_DOMAIN)
console.log("FIREBASE_PROJECT_ID", FIREBASE_PROJECT_ID)
console.log("FIREBASE_STORAGE_BUCKET", FIREBASE_STORAGE_BUCKET)
console.log("FIREBASE_MESSAGING_SENDER_ID", FIREBASE_MESSAGING_SENDER_ID)
console.log("FIREBASE_APP_ID", FIREBASE_APP_ID)
console.log("FIREBASE_MEASUREMENT_ID", FIREBASE_MEASUREMENT_ID)

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_ID,
  measurementId: FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app)

export { db };