import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage } from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAps6ga-H9UeG9w4kOY2F9OdCHXKHTxTDs",
  authDomain: "find-accommodation-eff35.firebaseapp.com",
  projectId: "find-accommodation-eff35",
  storageBucket: "find-accommodation-eff35.appspot.com",
  messagingSenderId: "499086803562",
  appId: "1:499086803562:web:f43ac2622ab8b708a18013",
  measurementId: "G-81CKW15738"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const storage =getStorage(app);