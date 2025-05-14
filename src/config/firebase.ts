
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkIZFFALR9WM0zoavj69r-uTAt8MgKAvQ",
  authDomain: "sign-in-6e27f.firebaseapp.com",
  projectId: "sign-in-6e27f",
  storageBucket: "sign-in-6e27f.firebasestorage.app",
  messagingSenderId: "686903140466",
  appId: "1:686903140466:web:6ac6404fe686e983f322eb",
  measurementId: "G-4MMDXX3L8G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
