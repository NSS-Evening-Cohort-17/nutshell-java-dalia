import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addEvent } from '../../modules/EventManager';
import "./EventForm.css"

//uses sessionstorage on Nutshell.js

export const EventForm = () => {
	// State will contain both Event data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()
	const navigate = useNavigate()

	const [appEvent, setEvent] = useState({

        userId: 0,
		title: "",
        subject: "",
		locations: "",
		date: "",
		time: "",
		description: "",
		dateTime: ""
	});

    const [isLoading, setIsLoading] = useState(false);

    // you will need the the `getAll` in the LocationsManager and AnimalManager to complete this section
	// const [locations, setLocations] = useState([]);
	// const [animal, setAnimal] = useState([]);
    //placeholder: dont know hwat to do with this if anythng

    const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newEvent = { ...appEvent }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Event is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newEvent[event.target.id] = selectedVal
		// update state
		setEvent(newEvent)
	}

    const handleClickSaveEvent = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form

		const user = JSON.parse(sessionStorage.getItem("nutshell_user"))

		const newEvent = { ...appEvent }
		newEvent.userId = user.id
		newEvent.dateTime = new Date().toLocaleString();
		// setEvent(newEvent)
		//invoke addEvent passing event as an argument.
		//once complete, change the url and display the event list
		addEvent(newEvent)
			.then(() => navigate("/events"))
		
	}


    return (
        <form className="eventForm">
            <h2 className="eventForm_header">New Event</h2>
			<h2></h2>
            <fieldset>
				<div className="form-group">
					<label htmlFor="title">Title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="New Year's Party" value={appEvent.title} />
				    </div>
			        </fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="subject">Subject</label>
					<input type="text" id="subject" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Hoilday" value={appEvent.subject} />
				    </div>
			        </fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="locations">location</label>
					<input type="text" id="locations" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="123 NSS st" value={appEvent.locations} />
				    </div>
			        </fieldset>
            <fieldset>
				<div className="form-group">
					<label htmlFor="date">Date</label>
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="2/2/22" value={appEvent.date} />
				    </div>
			        </fieldset>
					<fieldset>
				<div className="form-group">
					<label htmlFor="time">Time</label>
					<input type="text" id="time" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="2:22 pm" value={appEvent.time} />
				    </div>
			        </fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="text">Decription</label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Come have fun!" value={appEvent.description} />
				    </div>
			        </fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveEvent}>
				Save Event
          		</button>
        </form>
    )



}