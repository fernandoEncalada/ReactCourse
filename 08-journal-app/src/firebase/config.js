// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-LRE3s8MLXBlwpMWz0DodTKI7Rx4g9ZM",
  authDomain: "react-fcd34.firebaseapp.com",
  projectId: "react-fcd34",
  storageBucket: "react-fcd34.appspot.com",
  messagingSenderId: "342172257831",
  appId: "1:342172257831:web:6ad7f51b4432efc6250802"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );
