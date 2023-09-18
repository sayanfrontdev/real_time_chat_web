// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkdLPAvzTHPyWsm6hxpo-IhnmZQd7jXrQ",
  authDomain: "chat-app-3354b.firebaseapp.com",
  projectId: "chat-app-3354b",
  storageBucket: "chat-app-3354b.appspot.com",
  messagingSenderId: "216263335505",
  appId: "1:216263335505:web:8273d47168a555e01ae270"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)