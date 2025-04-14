import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";  // add this
import { getAuth } from "firebase/auth";            // optional, good to centralize

const firebaseConfig = {
  apiKey: "AIzaSyDiR3sLBP_aUW_aQR1ID8i5ODqa8m9PB-c",
  authDomain: "gsbusasamana.firebaseapp.com",
  projectId: "gsbusasamana",
  storageBucket: "gsbusasamana.appspot.com",
  messagingSenderId: "67380352322",
  appId: "1:67380352322:web:74332dc55feffe33a324db",
  measurementId: "G-973K2SHTNN"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);  // init Firestore
const auth = getAuth(app);      // init Auth

export { db, auth, analytics };
