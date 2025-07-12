// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA5qlODC7BJAvwnTRf2GGvfNVIngiYQIv8",
  authDomain: "webapp-5a151.firebaseapp.com",
  projectId: "webapp-5a151",
  storageBucket: "webapp-5a151.firebasestorage.app",
  messagingSenderId: "213953749811",
  appId: "1:213953749811:web:758ea89bbe380894a25446",
  measurementId: "G-1KNBGKFQ66"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);