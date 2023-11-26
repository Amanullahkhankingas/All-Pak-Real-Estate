// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  apiKey: "AIzaSyB1EDwCgo2xmQDeeht5jnwVF_I06sbSOzI",
  authDomain: "all-pakistan-real-estate.firebaseapp.com",
  projectId: "all-pakistan-real-estate",
  storageBucket: "all-pakistan-real-estate.appspot.com",
  messagingSenderId: "768391181714",
  appId: "1:768391181714:web:d43ef7b6a8cd3a2e417d4b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);