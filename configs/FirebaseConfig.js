// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKGiqJ6TMjflZJXaBCtB-wdoGtdVY0MlI",
  authDomain: "ai-travel-planner-e1d54.firebaseapp.com",
  projectId: "ai-travel-planner-e1d54",
  storageBucket: "ai-travel-planner-e1d54.firebasestorage.app",
  messagingSenderId: "915142319325",
  appId: "1:915142319325:web:200d657151b93deead0f34"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)