import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBVMj55ntEwg0YPlwKdznKnwdpldBHvQp4",
    authDomain: "datadocs-daf63.firebaseapp.com",
    projectId: "datadocs-daf63",
    storageBucket: "datadocs-daf63.appspot.com",
    messagingSenderId: "197465962216",
    appId: "1:197465962216:web:6d5c1fa231529ede123b5d",
    measurementId: "G-Z2CB6B5PGJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };  