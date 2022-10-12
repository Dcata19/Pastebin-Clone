import { signOut } from 'firebase/auth';
import { auth } from '../firebase.js';

export default function SignOut({ setMessage }) {
  function SignOutUser() {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setMessage('Sign-out successful!');
      })
      .catch(() => {
        // An error happened.
      });
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }

  return (
    <button className='me-2 btn btn-danger shadow-none' onClick={SignOutUser}>
      SignOut
    </button>
  );
}
