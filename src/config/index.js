// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpgcLt2Bp7aOynnY5kV5v2RvOeWxaUEto",
  authDomain: "altschool-exam.firebaseapp.com",
  projectId: "altschool-exam",
  storageBucket: "altschool-exam.appspot.com",
  messagingSenderId: "535375771327",
  appId: "1:535375771327:web:fc5f30bf948c9e9492f80a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;