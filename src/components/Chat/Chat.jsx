import { useEffect, useState } from "react";
import { auth, db } from "../../firebase";
import { query, collection, orderBy, onSnapshot } from 'firebase/firestore';
import Message from "../Message/Message";
import SendMessage from "../SendMessage/SendMessage";
import { useAuthState } from "react-firebase-hooks/auth";
import './Chat.css'

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    const newQuery = query(collection(db, 'messages'), orderBy('timestamp'));

    const unsubscribe = onSnapshot(newQuery, (querySnapshot) => {
      let currentMessages = [];
      querySnapshot.forEach(item => {
        currentMessages.push({ content: item.data(), id: item.id })
      })
      setMessages(currentMessages);
    })
    return unsubscribe;
  }, [])

  return (
    <>
      <section className="chat-content">
        {
          messages && messages.map(item => (
          <Message
            key={item.id}
            message={item.content}
          />
        ))
      }
      {user && <SendMessage/>}
      
    </section>
     </>
      )
}

      export default Chat