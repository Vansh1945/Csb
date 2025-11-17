// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjYO6HkTEZsAsDb9cYFNqy7B29wKtEknk",
  authDomain: "creative-stiching-boutique.firebaseapp.com",
  projectId: "creative-stiching-boutique",
  storageBucket: "creative-stiching-boutique.firebasestorage.app",
  messagingSenderId: "743631909072",
  appId: "1:743631909072:web:559f17baaee6f00c34eed5",
  measurementId: "G-D92ZBVKN32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
