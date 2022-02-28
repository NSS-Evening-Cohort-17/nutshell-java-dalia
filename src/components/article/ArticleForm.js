import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { addArticle, getAllArticles } from '../../modules/ArticleManager';
import './ArticleForm.css'

export const ArticleForm = () => {
	// State will contain both article data as well as an isLoading flag.
	// Define the initial state of the form inputs with useState()

	const [article, setArticles] = useState({
		userId: 0,
    title: "",
		synopsis: "",
		url: "",
    date: "",
		time: ""
	});

	const [isLoading, setIsLoading] = useState(false);

	// you will need the the `getAll` in the LocationsManager and CustomersManager to complete this section
	// const [users, setUsers] = useState([]);

	const navigate = useNavigate();

	//when a field changes, update state. The return will re-render and display based on the values in state
	// NOTE! What's happening in this function can be very difficult to grasp. Read it over many times and ask a lot questions about it.
	//Controlled component

	const handleControlledInputChange = (event) => {
		/* When changing a state object or array,
		always create a copy, make changes, and then set state.*/
		const newArticle = { ...article }
		let selectedVal = event.target.value
		// forms always provide values as strings. But we want to save the ids as numbers.
		if (event.target.id.includes("Id")) {
			selectedVal = parseInt(selectedVal)
		}
		/* Article is an object with properties.
		Set the property to the new value
		using object bracket notation. */
		newArticle[event.target.id] = selectedVal
		// update state
		setArticles(newArticle)
	};

    useEffect(() => {
		//load location data and setState
    getAllArticles().then(setArticles)
	  }, []);


	const handleClickSaveArticle = (event) => {
    event.preventDefault() //Prevents the browser from submitting the form

    const user = JSON.parse(sessionStorage.getItem("nutshell_user"))

    const newArticle = { ...article }
    newArticle.userId = user.id
			addArticle(newArticle)
				.then(() => navigate("/articles"))
		}

	return (
		<form className="articleForm">
			<h2 className="articleForm__title">New Article</h2>
			<fieldset>
				<div className="form-group">
					<label htmlFor="name">Article Title:</label>
					<input type="text" id="title" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter title here" value={article.title} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="synopsis">Synopsis:</label>
					<input type="text" id="synopsis" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter description here" value={article.synopsis} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="url">URL:</label>
					<input type="text" id="url" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter url here" value={article.url} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="date">Date:</label>
					<input type="text" id="date" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter date here" value={article.date} />
				</div>
			</fieldset>
      <fieldset>
				<div className="form-group">
					<label htmlFor="time">Time:</label>
					<input type="text" id="time" onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Enter time here" value={article.time} />
				</div>
			</fieldset>
			<button className="btn btn-primary"
				onClick={handleClickSaveArticle}>
				Save Article
          </button>
		</form>
	)
};