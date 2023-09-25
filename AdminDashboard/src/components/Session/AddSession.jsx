import { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";

function AddSession() {
	const [category_id, setCategory_id] = useState(1);
	const [isRating, setIsRating] = useState(2);
	const [comment, setcomment] = useState("");
	const [rate, setRate] = useState("");
	const [user_id, setUser_id] = useState(1);
	const [name, setName] = useState("");

	const addSessions = () => {
		Axios.post("http://localhost:8085/api/sessions", {
			category_id: category_id,
			isRating: isRating,
			comment: comment,
			rate: rate,
			user_id: user_id,
			name: name,
		}).then(() => {
			console.log("success");
		});
	};

	const handleCategoryChange = (e) => {
		// Utilisez parseInt pour convertir la chaîne en nombre
		const categoryId = parseInt(e.target.value, 10);
		setCategory_id(categoryId);
	};
	const handleIsRatingChange = (e) => {
		const IsRating = parseInt(e.target.value, 10);
		setIsRating(IsRating);
	};
	const handleUserChange = (e) => {
		const User = parseInt(e.target.value, 10);
		setUser_id(User);
	};
	return (
		<div>
			<h2>Ajouter une séance</h2>
			<Link to={"/sessions"}>
				<button type="button">Retour Séances</button>
			</Link>
			<form action="">
				<div className="form__input">
					<label htmlFor="IdCategory"></label>
					<input
						type="number"
						placeholder="Entrez la catégorie"
						name="IdCategory"
						value={category_id}
						onChange={handleCategoryChange}
					></input>
				</div>
				<div className="form__input">
					<label htmlFor="IsRarting"></label>
					<input
						type="number"
						placeholder="Entrez 1 si évaluée sinon entrez 2"
						name="IsRating"
						value={isRating}
						onChange={handleIsRatingChange}
					></input>
				</div>
				<div className="form__textarea">
					<label htmlFor="comment"></label>
					<textarea
						placeholder="Entrez un commentaire"
						name="comment"
						value={comment}
						onChange={(event) => {
							setcomment(event.target.value);
						}}
					></textarea>
				</div>
				<div className="form__input">
					<label htmlFor="Rate"></label>
					<input
						type="text"
						placeholder="Entrez 'bien' si OK sinon entrez 'mauvais'"
						name="Rate"
						value={rate}
						onChange={(event) => {
							setRate(event.target.value);
						}}
					></input>
				</div>
				<div className="form__input">
					<label htmlFor="IdUser"></label>
					<input
						type="number"
						placeholder="Entrez la catégorie"
						name="IdUser"
						value={user_id}
						onChange={handleUserChange}
					></input>
				</div>
				<div className="form__input">
					<label htmlFor="Name"></label>
					<input
						type="text"
						placeholder="Entrez la nom de la catégorie"
						name="Name"
						value={name}
						onChange={(event) => {
							setName(event.target.value);
						}}
					></input>
				</div>
				<button
					type="submit"
					className="form__button"
					onClick={addSessions}
				>
					Ajouter
				</button>
			</form>
		</div>
	);
}

export default AddSession;
