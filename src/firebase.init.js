// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO0hk6ROOo8Y6Dt8o9JPZhucrVDXzvzQQ",
  authDomain: "warehouse-management-2b449.firebaseapp.com",
  projectId: "warehouse-management-2b449",
  storageBucket: "warehouse-management-2b449.appspot.com",
  messagingSenderId: "1095521560719",
  appId: "1:1095521560719:web:d84af3f6bbdb2290eba8fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
