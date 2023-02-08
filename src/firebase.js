import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlLgnbhuQ8ZUGex2nk1IKJD0rMq4y5tKU",
  authDomain: "first-project-346ba.firebaseapp.com",
  projectId: "first-project-346ba",
  storageBucket: "first-project-346ba.appspot.com",
  messagingSenderId: "266795638654",
  appId: "1:266795638654:web:dce26d6be87b5228369d2f",
  measurementId: "G-2YN1GX4G6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export {app, auth}