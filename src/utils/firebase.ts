// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA20UNtZdmsR5FCkYRiO1dJZuXz4BkaZZI",
  authDomain: "netflix-gpt-cb920.firebaseapp.com",
  projectId: "netflix-gpt-cb920",
  storageBucket: "netflix-gpt-cb920.firebasestorage.app",
  messagingSenderId: "312557372200",
  appId: "1:312557372200:web:f3b5308e2d35fc1f17c61d",
  measurementId: "G-9TPZT578VL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth();
