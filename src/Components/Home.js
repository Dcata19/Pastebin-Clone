import { useRef } from "react"
import { collection, addDoc } from "firebase/firestore";

export default function Home({ db, userUID, message, setMessage }) {

    const titleRef = useRef(null);
    const pasteRef = useRef(null);

    async function createPaste() {
        try {
            await addDoc(collection(db, userUID), {
                title: titleRef.current.value,
                paste: pasteRef.current.value,
            });
            setMessage('The paste has been created!');
            titleRef.current.value = '';
            pasteRef.current.value = '';
        } catch (e) {
            setMessage('You are not authenticated!');
        }
        setTimeout(() => { setMessage('') }, 2000);
    }

    return (
        <>
            <h6 className="pt-2">Title</h6>
            <input type="text" ref={titleRef} className="mb-2 rounded text-white" style={{ outline: 0, backgroundColor: "#202020" }}></input>
            <h6 className="pt-2">New Paste</h6>
            <textarea type="text" ref={pasteRef} className="w-100 mb-2 rounded text-white" style={{ height: 300, outline: 0, backgroundColor: "#202020", resize: "none" }}></textarea>
            <button className="btn mb-2" onClick={createPaste} style={{ backgroundColor: "#202020", color: "white" }}>Create New Paste</button>
            <p>{message}</p>
        </>
    )
}
