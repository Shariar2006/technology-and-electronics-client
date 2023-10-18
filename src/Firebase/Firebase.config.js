// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9rmLmBgl06Ias0A6uoKgEQmHpWEI5YaU",
  authDomain: "technology-and-electroni-f76eb.firebaseapp.com",
  projectId: "technology-and-electroni-f76eb",
  storageBucket: "technology-and-electroni-f76eb.appspot.com",
  messagingSenderId: "692765439010",
  appId: "1:692765439010:web:b3a74afe8c64ba9a63867b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth