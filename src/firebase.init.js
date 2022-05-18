import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyAQDDG3YzLW5oXYYLl8lT0GCT1kzIJ6Mvg",
  authDomain: "to-do-app-8fe72.firebaseapp.com",
  projectId: "to-do-app-8fe72",
  storageBucket: "to-do-app-8fe72.appspot.com",
  messagingSenderId: "708565048781",
  appId: "1:708565048781:web:2c3f70b032b9b1d07cb884"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;