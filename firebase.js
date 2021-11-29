// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-bdZ4i5fk3kZtJeuZMme4P_iqZYi9WFY",
  authDomain: "uber-x-clone-live.firebaseapp.com",
  projectId: "uber-x-clone-live",
  storageBucket: "uber-x-clone-live.appspot.com",
  messagingSenderId: "715606620938",
  appId: "1:715606620938:web:60f75d34935f63b169d8f3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }