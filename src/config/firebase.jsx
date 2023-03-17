// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBVdoIZ1ojShiz6_A1VbYlMLfCWG2EN6Zw",
  authDomain: "fir-data-1049d.firebaseapp.com",
  projectId: "fir-data-1049d",
  storageBucket: "fir-data-1049d.appspot.com",
  messagingSenderId: "849201387640",
  appId: "1:849201387640:web:43594994a9307ba958758d",
  measurementId: "G-ED8W0VJR5Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googelProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
