import { useRef } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { auth, db } from '../firebase.js';

export default function Home({ message, setMessage }) {
  const titleRef = useRef(null);
  const pasteRef = useRef(null);

  function createPaste() {
    auth.onAuthStateChanged(user => {
      if (user) {
        addDoc(collection(db, user.email), {
          title: titleRef.current.value,
          paste: pasteRef.current.value,
        });
        setMessage('The paste has been created!');
        titleRef.current.value = '';
        pasteRef.current.value = '';
      } else {
        setMessage('You are not authenticated!');
      }
    });
    setTimeout(() => {
      setMessage('');
    }, 2000);
  }

  return (
    <>
      <h6 className='pt-2'>Title</h6>
      <input
        type='text'
        ref={titleRef}
        className='mb-2 rounded text-white'
        style={{ outline: 0, backgroundColor: '#202020' }}
      ></input>
      <h6 className='pt-2'>New Paste</h6>
      <textarea
        type='text'
        ref={pasteRef}
        className='w-100 mb-2 rounded text-white'
        style={{
          height: 300,
          outline: 0,
          backgroundColor: '#202020',
          resize: 'none',
        }}
      ></textarea>
      <button
        className='btn mb-2'
        onClick={createPaste}
        style={{ backgroundColor: '#202020', color: 'white' }}
      >
        Create New Paste
      </button>
      <p>{message}</p>
    </>
  );
}
