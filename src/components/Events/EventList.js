import React, { useState, useEffect } from 'react';
import { EventCard } from './EventCard.js';
import { getAllEvents, getEventById, deleteEvent } from '../../modules/EventManager.js';
import { useNavigate } from 'react-router-dom'

export const EventList = () => {
    //The initial state is an empty array
    const [events, setEvents] = useState([]);
    let navigate = useNavigate();

    const getEventById = () => {
        //After the date comes back from the API,
        // we use the setEvents funstion to update state
        return getAllEvents().then(eventsFromAPI => {
            setEvents(eventsFromAPI)
        });
    }

    //got the customers from the API on the components's first render
    useEffect(() => {
        getEventById();
    }, []);

    //this is the delete customer function
    const handleDeleteEvent = id => {
        deleteEvent(id)
        .then(() => getAllEvents().then(setEvents));
    };

    //Now we use .map() to "loop over" the events array to show a list of event cards
    return (
        <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {navigate("/events/create")}}>
                    Add New Evevnt
                    </button>
            </section>
            <div className="container-cards">
                {events.map(event =>
                    <EventCard 
                    key={event.id}
                    eventObject={event}
                    handleDeleteEvent={handleDeleteEvent} />)}
            </div>
        </>
    )
}