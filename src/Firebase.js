// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAr1VUtP_-sKTOxZQpuDKIRG4QUWj35Ga0",
  authDomain: "react-todo-36549.firebaseapp.com",
  projectId: "react-todo-36549",
  storageBucket: "react-todo-36549.appspot.com",
  messagingSenderId: "507909574853",
  appId: "1:507909574853:web:49e1c3047c0b994ea8a0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);