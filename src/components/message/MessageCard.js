import React from "react"
import { Link } from "react-router-dom";
import "./Message.css"

export const MessageCard = ({ message, handleDeleteMessage }) => {

    return (
        <div className="card">
           <h1>Sent to: {message.recipientId} </h1>
           <div className="card-content">
            <h2>Subject: {message.subject} </h2>
            <p> Message: {message.body} </p>
            <p>Post Time: {message.dateTime}</p>
              <button type="button" onClick={() => handleDeleteMessage(message?.id)}>Delete Message</button>
           </div>
       </div>
    )


}
