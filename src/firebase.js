// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_ESTIO_API_KEY,
  authDomain: "ecommerce-mern-c3997.firebaseapp.com",
  projectId: "ecommerce-mern-c3997",
  storageBucket: "ecommerce-mern-c3997.appspot.com",
  messagingSenderId: "165760036921",
  appId: "1:165760036921:web:99f129c4e83df5d82b5de8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);