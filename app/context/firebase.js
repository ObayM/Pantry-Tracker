// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHSdNPlBQCN0w60SPuOw9WQ7OQZKoQqQA",
  authDomain: "inventory-management-9ce51.firebaseapp.com",
  projectId: "inventory-management-9ce51",
  storageBucket: "inventory-management-9ce51.appspot.com",
  messagingSenderId: "652033511903",
  appId: "1:652033511903:web:51107dbcb052ce33c8f46a",
  measurementId: "G-R75QCNVZQQ"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
