// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCjMv6VLvKNgRwwYe2evAWPgVSgeqze-jc",
  authDomain: "lcl-hackathon-e9-sbox-4dba.firebaseapp.com",
  projectId: "lcl-hackathon-e9-sbox-4dba",
  storageBucket: "lcl-hackathon-e9-sbox-4dba.appspot.com",
  messagingSenderId: "74992322763",
  appId: "1:74992322763:web:55a8022aa3552b72e0b34e",
  measurementId: "G-3TH4ZB78Z0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
