import React from "react"
import { Link } from "react-router-dom";
import "./EventCard.css"


export const EventCard = ({ eventObject, handleDeleteEvent }) => {


    return (
       <div className="card">
           <h1>Posted by: {eventObject.user.name} </h1>
           <div className="card-content">
            <h1>Title: <span className="card-EventTitle">
                {eventObject.title}
                </span></h1>
            <h2>Subject: {eventObject.subject} </h2>
            <h2>Location: {eventObject.location} </h2>
            <h3>Date: {eventObject.date} </h3>
            <h3>Time: {eventObject.time} </h3>
            <p> Description: {eventObject.description} </p>
            <p>Post Time: {eventObject.dateTime}</p>
            <Link to={`/events/${eventObject.id}/edit`}>
              <button>Edit</button>
              </Link>
              <button type="button" onClick={() => handleDeleteEvent(eventObject.id)}>Delete Event</button>
           </div>
       </div>
    )
}

