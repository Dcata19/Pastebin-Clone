import { collection, query, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Profile({ db, userUID }) {

    const [pastes, setPastes] = useState([]);

    async function show() {
        const q = await query(collection(db, userUID));
        onSnapshot(q, (querySnapshot) => {
            const pastes = [];
            querySnapshot.forEach((doc) => {
                pastes.push(doc.data());
            });
            setPastes(pastes);
        });
    }

    useEffect(() => {
        show();
    }, [userUID])

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
