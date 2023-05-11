// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABhYdNAwd_pN_X3jjXqX2f6LOYDzy7tSk",
  authDomain: "journal-vite-app.firebaseapp.com",
  projectId: "journal-vite-app",
  storageBucket: "journal-vite-app.appspot.com",
  messagingSenderId: "955994330299",
  appId: "1:955994330299:web:71f1eba77bfd72ba14c59e"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );