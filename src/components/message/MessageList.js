import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCard } from './MessageCard';
import { getAllMessages, getMessageById, deleteMessage } from '../../modules/MessageManager';

export const MessageList = () => {
  // The initial state is an empty array
  const [messages, setMessages] = useState([]);

  const navigate = useNavigate();

  const getMessages = () => {
    // After the data comes back from the API, we use the setMessages function to update state
    return getAllMessages().then(messagesFromAPI => {
      setMessages(messagesFromAPI)
    });
  };

  // Got the messages from the API on the component's first render
  useEffect(() => {
    getMessages();
  }, []);

  const handleDeleteMessage = id => {
    deleteMessage(id)
    .then(() => getAllMessages().then(setMessages));
  };

  // Finally we use .map() to "loop over" the messages array to show a list of article cards
  return(
    <>
      <section className="section-content">
        <button type="button"
            className="btn"
            onClick={() => {navigate("/messages/create")}}>
            Create Message
        </button>
      </section>
      <div className="container-cards">
        {messages.map(message =>
          <MessageCard 
          key={message.id} 
          message={message}
          handleDeleteMessage={handleDeleteMessage} />
        )}
      </div>
    </>
  );
};