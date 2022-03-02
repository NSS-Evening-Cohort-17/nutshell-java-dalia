import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { getAllFriends } from '../../modules/FriendManager';
// import './FriendForm.css'
import { addFriend } from '../../modules/FriendManager';
import { getAllUsers } from '../../modules/FriendManager';

export const FriendForm = () => {


	const [friend, setFriend] = useState({
		id: 0,
		userId: 0,
		friendedUserId: 0
	});

	const [isLoading, setIsLoading] = useState(false);


	const [users, setUsers] = useState({
		email: "",
		name: "",
		id: 0

	});

	const navigate = useNavigate();


	const handleControlledInputChange = (event) => {

		const newFriend = { ...friend }
		let selectedVal = event.target.value

		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
	

		newFriend[event.target.id] = selectedVal

		setFriend(newFriend)
	}

	useEffect(() => {
		getAllUsers().then(setUsers)
	}, );

	const handleClickSaveFriend = (event) => {

		// const userId = friend.userId

		addFriend(friend)
			.then(() => navigate("/friends"))
	}


	 return (
		<form className="friendForm">
			<h2 className="friendForm__title">Add Friends</h2>


			<fieldset>
				<div className="form-group">

					<select value={friend.userId} name="friend" id="userId" onChange={handleControlledInputChange} className="form-control" >
						<option value="0">select a user</option>
						{users.map(c => (
							<option key={c.id} value={c.id}>
								{c.name}
							</option>
						))}
					</select>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveFriend}>
				Add Friend
			</button>
		</form>
	)
}

