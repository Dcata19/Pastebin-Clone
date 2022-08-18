import { Link } from "react-router-dom";
import SignOut from "./SignOut";
import { auth } from "../firebase.js";
import { useEffect, useState } from "react";

export default function NavBar({ setMessage }) {

  const [uid, setUid] = useState('');

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      if (user) {
        setUid('1')
      } else {
        setUid('');
      }
    })
  }, [uid])


  return (
    <>
      <nav className="navbar navbar-dark" style={{ boxShadow: "1px 1px #888888" }}>
        <div className="container">
          <ul className="list-group list-group-horizontal navbar-nav">
            <li className="nav-item pe-1">
              <a className="fs-4 p-1 nav-link active" href="/">PASTEBIN</a>
            </li>
            <li className="nav-item pt-1">
              <a className="fs-6 p-1 rounded-1 nav-link active bg-success" href="/">➕paste</a>
            </li>
          </ul>
          <div>
            {uid === '' && <Link to="authentication">
              <button className="me-2 btn btn-light shadow-none">Authentication</button>
            </Link>}
            {uid !== '' && <Link to="profile">
              <button className="me-2 btn btn-secondary shadow-none">Profile</button>
            </Link>}
            {uid !== '' && <Link to="/">
              <SignOut setMessage={setMessage} />
            </Link>}
          </div>
        </div>
      </nav>
    </>
  )
}