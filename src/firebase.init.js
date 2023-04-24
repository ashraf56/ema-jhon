// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMKj0_3dTNXCzobujic8FXxgfKGuhB-nA",
  authDomain: "ema-jhon-45631.firebaseapp.com",
  projectId: "ema-jhon-45631",
  storageBucket: "ema-jhon-45631.appspot.com",
  messagingSenderId: "473285399553",
  appId: "1:473285399553:web:9f2ef10e1364a550441c00",
  measurementId: "G-YDN2YBCXC9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;