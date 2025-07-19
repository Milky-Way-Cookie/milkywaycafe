// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8YF1ZctV9RsBktMPaXBfmWapMgU-nUGs",
  authDomain: "milkywaycookie-8fed8.firebaseapp.com",
  projectId: "milkywaycookie-8fed8",
  storageBucket: "milkywaycookie-8fed8.firebasestorage.app",
  messagingSenderId: "33761720552",
  appId: "1:33761720552:web:86784924229a7ce4faf15d",
  measurementId: "G-7GNJVRYGLL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);