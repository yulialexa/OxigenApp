// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
apiKey: "AIzaSyB-8CEGFKn-u9TZDWbJdzXR2WVS62GA0OI",
authDomain: "oxigenappbd.firebaseapp.com",
projectId: "oxigenappbd",
storageBucket: "oxigenappbd.appspot.com",
messagingSenderId: "419222636748",
appId: "1:419222636748:web:f5981d046cf07cbe149a69"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(config);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
