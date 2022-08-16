import { Link } from "react-router-dom";
import SignOut from "./SignOut";

export default function NavBar({ auth, setMessage, setUserUID, userUID }) {

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
            {userUID === '' && <Link to="authentication">
              <button className="me-2 btn btn-light shadow-none">Authentication</button>
            </Link>}
            {userUID !== '' && <Link to="profile">
              <button className="me-2 btn btn-secondary shadow-none">Profile</button>
            </Link>}
            {userUID !== '' && <Link to="/">
              <SignOut auth={auth} setMessage={setMessage} setUserUID={setUserUID} />
            </Link>}
          </div>
        </div>
      </nav>
    </>
  )
}