// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDnEDNddEAGz7SwLHoaqRpY4OeOj8wi7Qg",
  authDomain: "proyectofinalkaku.firebaseapp.com",
  projectId: "proyectofinalkaku",
  storageBucket: "proyectofinalkaku.firebasestorage.app",
  messagingSenderId: "770735471722",
  appId: "1:770735471722:web:74e95e42e944b594921e13",
  measurementId: "G-RQX350Q6YT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db  = getFirestore(app)

export { db };