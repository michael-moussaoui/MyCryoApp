// import { useState, useEffect } from "react";
// import Axios from "axios";
// import { useParams, Link, Navigate } from "react-router-dom";

// function EditSession() {
// 	const { id } = useParams();
// 	const navigate = Navigate;

// 	// Définissez des états pour les données de la séance
// 	// const [sessionData, setSessionData] = useState({
// 	// 	category_id: "",
// 	// 	isRating: "",
// 	// 	comment: "",
// 	// 	rate: "",
// 	// 	user_id: "",
// 	// 	name: "",
// 	// });
// 	const [category_id, setCategory_id] = useState("");
// 	const [isRating, setIsRating] = useState("");
// 	const [comment, setcomment] = useState("");
// 	const [rate, setRate] = useState("");
// 	const [user_id, setUser_id] = useState("");
// 	const [name, setName] = useState("");
// 	useEffect(() => {
// 		// Effectuez une requête pour récupérer les données de la séance depuis la base de données
// 		Axios.get("http://localhost:8085/api/sessions/" + id, {
// 			category_id: category_id,
// 			isRating: isRating,
// 			comment: comment,
// 			rate: rate,
// 			user_id: user_id,
// 			name: name,
// 		})
// 			.then((response) => {
// 				console.log(response);
// 				const sessionData = response.data;

// 				// Mettez à jour l'état avec les données de la séance
// 				setSessionData(sessionData);
// 			})
// 			.catch((error) => {
// 				console.error(
// 					"Erreur lors de la récupération des données de la séance : ",
// 					error
// 				);
// 			});
// 	}, [id]); // Assurez-vous d'inclure "id" comme dépendance pour recharger les données lorsque l'ID change.

// 	const handleCategoryChange = (e) => {
// 		const categoryId = parseInt(e.target.value, 10);
// 		setSessionData({ ...sessionData, category_id: categoryId });
// 	};

// 	const handleIsRatingChange = (e) => {
// 		const isRating = parseInt(e.target.value, 10);
// 		setSessionData({ ...sessionData, isRating: isRating });
// 	};

// 	const handleCommentChange = (e) => {
// 		const comment = e.target.value;
// 		setSessionData({ ...sessionData, comment: comment });
// 	};
// 	const handleRateChange = (e) => {
// 		const rate = e.target.value;
// 		setSessionData({ ...sessionData, rate: rate });
// 	};
// 	const handleUserChange = (e) => {
// 		const userId = parseInt(e.target.value, 10);
// 		setSessionData({ ...sessionData, user_id: userId });
// 	};

// 	const handleNameChange = (e) => {
// 		const name = e.target.value;
// 		setSessionData({ ...sessionData, name: name });
// 	};
// 	const updateSession = () => {
// 		Axios.put(`http://localhost:8086/api/sessions/${id}`, sessionData)
// 			.then((response) => {
// 				console.log(response);
// 				const updatedSessionData = response.data;

// 				// Mettez à jour l'état avec les données de la séance mises à jour
// 				setSessionData(updatedSessionData);
// 			})
// 			.catch((error) => {
// 				console.error(
// 					"Erreur lors de la modification de la séance : ",
// 					error
// 				);
// 			});
// 	};
// 	const deleteSession = async (idcateg) => {
// 		if (
// 			window.confirm(
// 				"Etes-vous sur de vouloir supprimer cette séance"
// 			)
// 		) {
// 			await Axios.delete(`http://localhost:8086/api/sessions/${id}`);
// 		}
// 	};
// 	return (
// 		<div>
// 			<h2>Modifier une séance</h2>
// 			<Link to={"/sessions"}>
// 				<button type="button">Retour Séances</button>
// 			</Link>
// 			<form action="">
// 				<div className="form__input">
// 					<label htmlFor="IdCategory">Entrez l'ID la catégorie</label>
// 					<input
// 						type="number"
// 						placeholder="Entrez la catégorie"
// 						name="IdCategory"
// 						value={sessionData.category_id}
// 						onChange={handleCategoryChange}
// 					></input>
// 				</div>
// 				<div className="form__input">
// 					<label htmlFor="IsRarting">
// 						Entrez 1 si évaluée sinon entrez 2
// 					</label>
// 					<input
// 						type="number"
// 						placeholder="Entrez 1 si évaluée sinon entrez 2"
// 						name="IsRating"
// 						value={sessionData.isRating}
// 						onChange={handleIsRatingChange}
// 					></input>
// 				</div>
// 				<div className="form__textarea">
// 					<label htmlFor="comment">Entrez un commentaire</label>
// 					<textarea
// 						placeholder="Entrez un commentaire"
// 						name="comment"
// 						value={sessionData.comment}
// 						onChange={handleCommentChange}
// 					></textarea>
// 				</div>
// 				<div className="form__input">
// 					<label htmlFor="Rate">
// 						Entrez 'bien' si OK sinon entrez 'mauvais'
// 					</label>
// 					<input
// 						type="text"
// 						placeholder="Entrez 'bien' si OK sinon entrez 'mauvais'"
// 						name="Rate"
// 						value={sessionData.rate}
// 						onChange={handleRateChange}
// 					></input>
// 				</div>
// 				<div className="form__input">
// 					<label htmlFor="IdUser">Entrez l'ID de l'user</label>
// 					<input
// 						type="number"
// 						placeholder="Entrez l'ID de l'user"
// 						name="IdUser"
// 						value={sessionData.user_id}
// 						onChange={handleUserChange}
// 					></input>
// 				</div>
// 				<div className="form__input">
// 					<label htmlFor="Name">Entrez la nom de la catégorie</label>
// 					<input
// 						type="text"
// 						placeholder="Entrez la nom de la catégorie"
// 						name="Name"
// 						value={sessionData.name}
// 						onChange={handleNameChange}
// 					></input>
// 				</div>
// 				<button
// 					type="submit"
// 					className="form__button"
// 					onClick={updateSession}
// 				>
// 					Modifier
// 				</button>
// 				<button
// 					type="submit"
// 					className="form__button"
// 					onClick={() => {
// 						deleteSession;
// 					}}
// 				>
// 					Supprimer
// 				</button>
// 			</form>
// 		</div>
// 	);
// }

// export default EditSession;
