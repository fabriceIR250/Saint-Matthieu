// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiR3sLBP_aUW_aQR1ID8i5ODqa8m9PB-c",
  authDomain: "gsbusasamana.firebaseapp.com",
  projectId: "gsbusasamana",
  storageBucket: "gsbusasamana.firebasestorage.app",
  messagingSenderId: "67380352322",
  appId: "1:67380352322:web:74332dc55feffe33a324db",
  measurementId: "G-973K2SHTNN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);