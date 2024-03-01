// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCVwuU4ga-SG24YyMTHvSeeHQhqHHcoXwc",
  authDomain: "expense-tracker-1f8cc.firebaseapp.com",
  projectId: "expense-tracker-1f8cc",
  storageBucket: "expense-tracker-1f8cc.appspot.com",
  messagingSenderId: "489108802134",
  appId: "1:489108802134:web:718673487c1f84038289f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);


// firebase login
// firebase init
// firebase deploy