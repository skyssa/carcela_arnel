// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-Pijd1kz5vuAXLRDyeNOstP8dznsFUVk",
  authDomain: "apptodo-2600a.firebaseapp.com",
  projectId: "apptodo-2600a",
  storageBucket: "apptodo-2600a.appspot.com",
  messagingSenderId: "923698049742",
  appId: "1:923698049742:web:af278e86910849a08d969f",
  measurementId: "G-5YYNPYDLLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const db = getFirestore(app);

export { db };

