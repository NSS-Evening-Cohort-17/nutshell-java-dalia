import React from "react"
import { Link } from "react-router-dom";
import "./Message.css"

export const MessageCard = ({ message, handleDeleteMessage }) => {

    return (
        <div className="card">
           <h1>Posted by: {message.userId} </h1>
           <h1>Posted by: {message.reciepientId} </h1>
           <div className="card-content">
            <h2>Subject: {message.subject} </h2>
            <p> Description: {message.body} </p>
            <p>Post Time: {message.dateTime}</p>
            <Link to={`/messages/${message.id}/edit`}>
              <button>Edit</button>
              </Link>
              <button type="button" onClick={() => handleDeleteMessage(message.id)}>Delete Event</button>
           </div>
       </div>
    )


}