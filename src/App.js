import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Authentication from "./Components/Authentication";
import NavBar from "./Components/NavBar";
import Profile from "./Components/Profile";
import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useState, useEffect } from "react";

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
const auth = getAuth(app);
const db = getFirestore(app);

const LOCAL_STORAGE_KEY = 'user';

export default function App() {

  const [userUID, setUserUID] = useState('');
  const [message, setMessage] = useState();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storedUser) {
      setUserUID(storedUser);
    }
  })

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(userUID));
  }, [userUID]);

  return (
    <>
      <NavBar userUID={userUID} auth={auth} setMessage={setMessage} setUserUID={setUserUID} />
      <div className="container bg-dark text-white" style={{ border: "1px solid #888888" }}>
        <Routes>
          <Route path="/" element={<Home app={app} db={db} userUID={userUID} message={message} setMessage={setMessage} />} />
          <Route path="authentication" element={<Authentication auth={auth} message={message} setMessage={setMessage} setUserUID={setUserUID} />} />
          <Route path="profile" element={<Profile db={db} userUID={userUID} />} />
        </Routes>
      </div>
    </>
  )
}
