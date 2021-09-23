// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: "AIzaSyCZbwlVw8hIRe5TnRfqFiAu0utHs-w7c1M",
//   authDomain: "letsgetnaild.firebaseapp.com",
//   projectId: "letsgetnaild",
//   storageBucket: "letsgetnaild.appspot.com",
//   messagingSenderId: "150825602269",
//   appId: "1:150825602269:web:266ecf1b29ce18666cdf34",
//   measurementId: "G-B5KLQ86HS2"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

import * as firebase from 'firebase';
import '@firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCZbwlVw8hIRe5TnRfqFiAu0utHs-w7c1M",
    authDomain: "letsgetnaild.firebaseapp.com",
    projectId: "letsgetnaild",
    storageBucket: "letsgetnaild.appspot.com",
    messagingSenderId: "150825602269",
    appId: "1:150825602269:web:266ecf1b29ce18666cdf34",
    measurementId: "G-B5KLQ86HS2"
};
firebase.initializeApp(firebaseConfig);
export default firebase;
