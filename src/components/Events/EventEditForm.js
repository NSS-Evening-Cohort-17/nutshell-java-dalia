import React, { useState, useEffect } from "react"
import {useNavigate, useParams} from "react-router-dom";
import {getEventById, updateEvent} from "../../modules/EventManager"
import "./EventForm.css"

export const EventEditForm = () => {
    const [event, setEvent] = useState({ title: "", subject: "", location: "", description: "", date: "", time: "" });
    const [isLoading, setIsLoading ] = useState(false);

    const {eventId} = useParams();
    const navigate = useNavigate();

    const handleFieldChange = evt => {
        const stateToChange = { ...event };
        stateToChange[evt.target.id] = evt.target.value;
        setEvent(stateToChange);
    };

    const updateExistingEvent = evt => {
        evt.preventDefault()
        setIsLoading(true);

        // This is an edit, we need the id
        const editedEvent = {
            id: eventId,
            title: event.title,
            subject: event.subject,
            location: event.location,
            description: event.description,
            date: event.date,
            time: event.time

        };

        updateEvent(editedEvent)
            .then(() => navigate("/events")
        )

    }

    useEffect(() => {
        getEventById(eventId)
          .then(event => {
            setEvent(event);
            setIsLoading(false);
          });
    }, []);


    return (
        <>
            <form>
                <fieldset>
                    <div className="formgrid">
                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="title"
                            value={event.title}
                            />
                            <label htmlFor="name">Title</label>
                            

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="subject"
                            value={event.subject}
                            />
                            <label htmlFor="name">Subject</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="location"
                            value={event.location}
                            />
                            <label htmlFor="name">Location</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="date"
                            value={event.date}
                            />
                            <label htmlFor="name">Date</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="time"
                            value={event.time}
                            />
                            <label htmlFor="name">Time</label>

                        <input
                            type="text"
                            required
                            className="form-control"
                            onChange={handleFieldChange}
                            id="description"
                            value={event.description}
                            />
                            <label htmlFor="name">Decription</label>
                       
                        </div>
                    <div className="alignRight">
                        <button
                        type="button" disabled={isLoading}
                        onClick={updateExistingEvent}
                        className="btn btn-primary"
                        >Submit</button>

                        </div>
                </fieldset>
            </form>
        </>
    );

}