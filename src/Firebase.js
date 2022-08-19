// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6p58bbFGrw8hs4i8IYrmMe1QOJHRsZhU",
    authDomain: "concertaccountant-b7bf9.firebaseapp.com",
    databaseURL: "https://concertaccountant-b7bf9-default-rtdb.firebaseio.com",
    projectId: "concertaccountant-b7bf9",
    storageBucket: "concertaccountant-b7bf9.appspot.com",
    messagingSenderId: "849026845117",
    appId: "1:849026845117:web:e4358aae0fa5522d632ad4"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;