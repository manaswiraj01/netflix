// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBaNusA608OdxNpvdWbxGNWd2hgmaKmzsU",
  authDomain: "netflix-b1b84.firebaseapp.com",
  projectId: "netflix-b1b84",
  storageBucket: "netflix-b1b84.appspot.com",
  messagingSenderId: "1097266168937",
  appId: "1:1097266168937:web:fbe066a27459e2d9934ef8",
  measurementId: "G-8YH97EXM96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();