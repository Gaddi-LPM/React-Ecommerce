// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsOS64d_6ic3dEP_Jlaa6NV453laZQTJw",
  authDomain: "reactpro22.firebaseapp.com",
  projectId: "reactpro22",
  storageBucket: "reactpro22.appspot.com",
  messagingSenderId: "788233507184",
  appId: "1:788233507184:web:89a26ea49e937823b97fb5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);