// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRO_Ln3DW6xyZBN7cH0NJACfFZlYoUQWs",
  authDomain: "founder-feed-2a95a.firebaseapp.com",
  projectId: "founder-feed-2a95a",
  storageBucket: "founder-feed-2a95a.firebasestorage.app",
  messagingSenderId: "394704779804",
  appId: "1:394704779804:web:eb4b64b4ca78b0f749fdd9",
  measurementId: "G-2Y17CSDMFV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const analytics = getAnalytics(app);

export default app;