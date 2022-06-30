// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCLwzWM8fDjCpDETmHhQBzp-Tkg265goa4",
  authDomain: "proyecto-react-minelli.firebaseapp.com",
  projectId: "proyecto-react-minelli",
  storageBucket: "proyecto-react-minelli.appspot.com",
  messagingSenderId: "386774903629",
  appId: "1:386774903629:web:fae4c2915c4e7aed3ca504",
  measurementId: "G-6NW123QZ4D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
}