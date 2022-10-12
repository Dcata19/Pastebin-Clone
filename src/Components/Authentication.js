import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase.js';

export default function Authentication({ message, setMessage }) {
  const email = useRef(null);
  const password = useRef(null);
  let navigate = useNavigate();

  function SignUpUser() {
    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        // Signed in
        navigate('/');
      })
      .catch(() => {
        setMessage('Already exists!');
      });
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }

  function LogInUser() {
    signInWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then(() => {
        // Signed in
        navigate('profile');
      })
      .catch(() => {
        setMessage("Email or Password doesn't exists!");
      });
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }

  return (
    <>
      <h6 className='pt-2'>Login Page</h6>
      <hr className='mt-0'></hr>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>
          Email:
          <span style={{ color: '#ff0000' }}>*</span>
        </label>
        <div className='col-sm-10'>
          <input
            type='text'
            ref={email}
            style={{ backgroundColor: '#202020', outline: 0, color: 'white' }}
          ></input>
        </div>
      </div>
      <div className='mb-3 row'>
        <label className='col-sm-2 col-form-label'>
          Password:
          <span style={{ color: '#ff0000' }}>*</span>
        </label>
        <div className='col-sm-10'>
          <input
            type='password'
            ref={password}
            style={{ backgroundColor: '#202020', outline: 0, color: 'white' }}
          ></input>
        </div>
        <div className='col-sm-10'>
          <button
            className='btn border border-0 mt-3'
            onClick={LogInUser}
            style={{ backgroundColor: '#202020', outline: 0, color: 'white' }}
          >
            Login
          </button>
        </div>
        <div className='col-sm-10'>
          <button
            className='btn border border-0 mt-3'
            onClick={SignUpUser}
            style={{ backgroundColor: '#202020', outline: 0, color: 'white' }}
          >
            Create My Account
          </button>
        </div>
        <p>{message}</p>
      </div>
    </>
  );
}
