import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBDg0xKShCjFR8d8M_4MTm6wff6TTzEG70",
    authDomain: "pastebin-clone-1655a.firebaseapp.com",
    projectId: "pastebin-clone-1655a",
    storageBucket: "pastebin-clone-1655a.appspot.com",
    messagingSenderId: "985070940205",
    appId: "1:985070940205:web:296e429169f2b7dbee48a4",
    measurementId: "G-RVJDQWML9M",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);