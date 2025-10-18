// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAi-XTDQ-J9i9d6DGRLq5IlAAuZzdK7t5U",
  authDomain: "todoapp-f0fde.firebaseapp.com",
  projectId: "todoapp-f0fde",
  storageBucket: "todoapp-f0fde.firebasestorage.app",
  messagingSenderId: "263731809765",
  appId: "1:263731809765:web:54b851b2bb52b8dfcd330c",
  measurementId: "G-8S02PDQSHW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();




