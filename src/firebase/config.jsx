import {initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA5qlODC7BJAvwnTRf2GGvfNVIngiYQIv8",
  authDomain: "webapp-5a151.firebaseapp.com",
  projectId: "webapp-5a151",
  storageBucket: "webapp-5a151.firebasestorage.app",
  messagingSenderId: "213953749811",
  appId: "1:213953749811:web:758ea89bbe380894a25446",
  measurementId: "G-1KNBGKFQ66"
};

  initializeApp(firebaseConfig);

  const db = getFirestore();

  export {db}