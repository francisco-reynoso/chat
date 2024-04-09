import { useEffect, useState } from "react";
import { auth,db } from "./Firebase";
import { query,collection, orderBy,onSnapshot, Timestamp, QuerySnapshot } from "firebase/firestore";
import Message from "./Message";
import SendMessages from "./SendMessage";
import Loading from "./Loading";

const Chat = () => {
    const[messages,setMessages] = useState([]);
    const [loading,setLoading] = useState(true);

   
    useEffect(() =>{
        const newQuery = query(collection(db, "messages"), orderBy("timestamp"));
        const unsuscribe = onSnapshot(newQuery,(querySnapshot) =>{
            let currentMessages = []
            setLoading(false)
            querySnapshot.forEach (item =>{
                currentMessages.push({content: item.data(), id : item.id});
            });
            setMessages(currentMessages); 
    
        });
        
        return unsuscribe;
        
    }, [])
   
    
    return(
        <>
        
            { loading ? <Loading/> :  
                <section className="chat-messages">
                    <div className="chat-content">
                        {
                            messages && messages.map(item => (
                                <Message
                                    key={item.id}
                                    message= {item.content}
                                />
                            ))
                        }
                    </div>
                    <SendMessages></SendMessages>
                    
                </section>
                
            }
        </>
        
    )
}

export default Chat;