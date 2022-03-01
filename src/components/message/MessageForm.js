import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addMessage, getAllMessages } from '../../modules/MessageManager';
import { getAllFriends } from '../../modules/FriendManager';
import './MessageForm.css'

export const MessageForm = () => {
	// State will contain both message data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [message, setMessage] = useState({
		userId: 0,
    recipientId: 0,
    subject: "",
		description: "",
    dateTime: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the FriendsManager to complete this section
	const [friends, setFriends] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newMessage = { ...message }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Message is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newMessage[event.target.id] = selectedVal
		// update state
		setMessage(newMessage)
	}


  useEffect(() => {
		//load friend data and setState
      getAllFriends().then(setFriends)
	}, []);


	const handleClickSaveMessage = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const user = JSON.parse(sessionStorage.getItem("nutshell_user"))

    const recipientId = message.recipientId

    if (recipientId === 0) {
			window.alert("Please select a recipient")
		} else {

    const newMessage = { ...message }
    newMessage.userId = user.id
		newMessage.dateTime = new Date().toLocaleString();
		addMessage(newMessage)
		.then(() => navigate("/messages"))
	}

	return (
		<form className="messageForm">
			<h2 className="messageForm__title">New Message</h2>
      <fieldset>
				<div className="form-group">
					<label htmlFor="recipientId">Recipient: </label>
					<select value={message.recipientId} name="recipient" id="recipientId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">Select a recipient</option>
						{friends.map(r => (
							<option key={r.id} value={r.id}>
								{r.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="subject">Message Subject:</label>
					<input type="text" id="subject" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter subject here" value={message.subject} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="body">Body:</label>
					<input type="text" id="body" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter message here" value={message.body} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveMessage}>
				Save Message
          </button>
		</form>
	)}
};