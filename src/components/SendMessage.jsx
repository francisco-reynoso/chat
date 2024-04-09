import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db, auth } from "./Firebase";

const SendMessages = () =>{
    const [input, setInput] = useState("");
    const sendMessages= async e =>{
        e.preventDefault();
        if (input === "") {        
            return
        }
        const {uid,displayName, photoURL} = auth.currentUser;
        await addDoc(collection(db , "messages"),{
            text : input,
            name : displayName,
            uid,
            photo : photoURL,
            timestamp : serverTimestamp()
        });
        setInput("");
    }
    return(
        <form onSubmit={sendMessages}>
            <input type="text" 
                placeholder="ingresa un mensaje"
                value={input}
                onChange={e => setInput(e.target.value)}
            />
            <button type="submit">
                enviar
            </button>
        </form>
    )
}

export default SendMessages;