// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa51UWKIIcCfqza4UZnj8pMvXcUlIga10",
  authDomain: "moviemania-28.firebaseapp.com",
  projectId: "moviemania-28",
  storageBucket: "moviemania-28.appspot.com",
  messagingSenderId: "234106499481",
  appId: "1:234106499481:web:755d1565032b547a83e308"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export const moviesRef=collection(db,"movies");
export const reviewRef=collection(db,"reviews")

export default app;