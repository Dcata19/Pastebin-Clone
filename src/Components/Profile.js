import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db, auth } from "../firebase.js";

export default function Profile() {

    const [pastes, setPastes] = useState([]);

    function show() {
        auth.onAuthStateChanged(user => {
            if (user) {
                const q = query(collection(db, user.email));
                onSnapshot(q, (querySnapshot) => {
                    const pastes = [];
                    querySnapshot.forEach((doc) => {
                        pastes.push(doc.data());
                    });
                    setPastes(pastes);
                });
            }
        })
    }

    useEffect(() => {
        show();
    }, [])

    const list = pastes.map((paste, index) =>
        <li className="list-group-item bg-dark text-white" key={index}>
            <h3>{paste.title}</h3>
            <p>{paste.paste}</p>
        </li>
    )

    return (
        <ul className="list-group list-group-flush">
            {list}
        </ul>
    )
}
