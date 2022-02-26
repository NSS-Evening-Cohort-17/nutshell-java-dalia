import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Taskform.css'
import { addTask } from '../../modules/TaskManager';

// import { getAllLocations } from '../../modules/LocationManager';
// import { getAllCustomers } from '../../modules/CustomerManager';

export const TaskForm = () => {
	// State will contain both task data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [task, setTask] = useState({
		goal: "",
		location: "",
		description: "",
		timeframe: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	// imported from old code, may not need
	// const [locations, setLocations] = useState([]);
	// const [customers, setCustomers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newTask = { ...task }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* task is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newTask[event.target.id] = selectedVal
		// update state
		setTask(newTask)
	}

	//Unsure if this code is needed
    // useEffect(() => {
	// 	//load location data and setState
    //     getAllLocations().then(setLocations)
	// }, []);

    //  useEffect(() => {
	// 	//load customer data and setState
    //     getAllCustomers().then(setCustomers)
	// }, []);


	const handleClickSaveTask = (event) => {
		event.preventDefault() //Prevents the browser from submitting the form
		//if else statment may be unnessessary 
		// const locationId = task.locationId
		// const customerId = task.customerId

		// if (locationId === 0 || customerId === 0) {
		// 	window.alert("Please select a location and a customer")
		// } else 
		{
			//invoke addtask passing task as an argument.
			//once complete, change the url and display the task list
			addTask(task)
				.then(() => navigate("/tasks"))
		}
	}

	return (
		<form className="taskForm">
			<h2 className="taskForm__title">New Task</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="goal">Task Goal:</label>
					<input type="text" id="goal" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="task goal" value={task.goal} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Task Location:</label>
					<input type="text" id="location" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="task location" value={task.location} />
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="location">Task Description: </label>
					<input type="text" id="description" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="task description" value={task.description}/>
				</div>
			</fieldset>
			<fieldset>
				<div className="form-group">
					<label htmlFor="customerId">Task Timeframe: </label>
					<input type="text" id="timeframe" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="task timeframe" value={task.timeframe}/>
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveTask}>
				Save task
          </button>
		</form>
	)
};
