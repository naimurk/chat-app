// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdT5Ay5t3qn7lEmqaLYdRhlwGjnD7qWQ8",
  authDomain: "chatting-app-2a76f.firebaseapp.com",
  projectId: "chatting-app-2a76f",
  storageBucket: "chatting-app-2a76f.appspot.com",
  messagingSenderId: "310335185836",
  appId: "1:310335185836:web:e687f730dd790de8055009"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore()