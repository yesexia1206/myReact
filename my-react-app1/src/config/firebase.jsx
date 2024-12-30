// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

//匯入firebase
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB8Gif17yK2G4Coa59_9d079sTkEP6Hb7A",
    authDomain: "react-auth-c5cbe.firebaseapp.com",
    projectId: "react-auth-c5cbe",
    storageBucket: "react-auth-c5cbe.firebasestorage.app",
    messagingSenderId: "148431697073",
    appId: "1:148431697073:web:720237648a52a48ec59e90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//匯出
export const auth = getAuth(app);
export const provide = new GoogleAuthProvider();