import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAy5yYp7NsyXZDvSvIR6STtcjwu2sPDQkQ",
  authDomain: "fir-authentication-66c5c.firebaseapp.com",
  projectId: "fir-authentication-66c5c",
  storageBucket: "fir-authentication-66c5c.appspot.com",
  messagingSenderId: "838977790209",
  appId: "1:838977790209:web:e892c79f47d984ac4d7b00",
  measurementId: "G-WKC3K96Y47"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export{app, auth}