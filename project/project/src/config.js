import firebase from 'firebase/compat/app';
import { getDatabase } from 'firebase/database';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAtFCWn1x7ETLP9ebbOWGhp9g1vqWC-njc",
    authDomain: "sofdes-watermelon.firebaseapp.com",
    databaseURL: "https://sofdes-watermelon-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sofdes-watermelon",
    storageBucket: "sofdes-watermelon.appspot.com",
    messagingSenderId: "453456835907",
    appId: "1:453456835907:web:1c546f6f1eedf37211abf6",
    measurementId: "G-SDE2V56Z4X"
  };


if (firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
}

const db = getDatabase();

export { db }