// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC04bev5v-nB19yfhwteoDP0J6O2Yx88tU",
  authDomain: "yatragram-ae439.firebaseapp.com",
  projectId: "yatragram-ae439",
  storageBucket: "yatragram-ae439.appspot.com",
  messagingSenderId: "291815540587",
  appId: "1:291815540587:web:13a7611fcee400d9d82e2e",
  measurementId: "G-5TZPRZDYMB",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
