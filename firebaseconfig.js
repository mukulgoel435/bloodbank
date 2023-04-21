// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB_ByGFvLvGHYNq3_YTDITI5KzDQNQUBps",
  authDomain: "doctor-appointment-001.firebaseapp.com",
  projectId: "doctor-appointment-001",
  storageBucket: "doctor-appointment-001.appspot.com",
  messagingSenderId: "231952019929",
  appId: "1:231952019929:web:fa8d9b2f65dd7636ab69c8",
  measurementId: "G-KLP59Y9NK2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
