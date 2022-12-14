import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './components/App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyA1UO5EzI1Q9XjNty_ZlybBsvbTSeUm1Sk",
  authDomain: "chatster2-3f15e.firebaseapp.com",
  databaseURL: "https://chatster2-3f15e-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chatster2-3f15e",
  storageBucket: "chatster2-3f15e.appspot.com",
  messagingSenderId: "846632892691",
  appId: "1:846632892691:web:2f8b8567291c02710642e6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
