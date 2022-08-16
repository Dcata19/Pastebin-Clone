import { signOut } from "firebase/auth";

export default function SignOut({ auth, setMessage, setUserUID }) {

    function SignOutUser() {
        localStorage.clear();
        setUserUID('');
        signOut(auth).then(() => {
            // Sign-out successful.
            setMessage("Sign-out successful!");
        }).catch((error) => {
            // An error happened.
        });
        setTimeout(() => { setMessage('') }, 2000);
    }

    return (
        <button className="me-2 btn btn-danger shadow-none" onClick={SignOutUser}>SignOut</button>
    )
}