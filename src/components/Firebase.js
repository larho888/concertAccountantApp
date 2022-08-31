import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD6p58bbFGrw8hs4i8IYrmMe1QOJHRsZhU",
    authDomain: "concertaccountant-b7bf9.firebaseapp.com",
    databaseURL: "https://concertaccountant-b7bf9-default-rtdb.firebaseio.com",
    projectId: "concertaccountant-b7bf9",
    storageBucket: "concertaccountant-b7bf9.appspot.com",
    messagingSenderId: "849026845117",
    appId: "1:849026845117:web:e4358aae0fa5522d632ad4"
};

const firebase = initializeApp(firebaseConfig);
const auth = getAuth(firebase);

export {firebase, auth}