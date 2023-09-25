import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CustomModal from "../../components/Modal/Modal";
// import { sessions } from "../../../data/data";
import "./sessions.css";

function Sessions() {
	const [session, setSession] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:8085/api/sessions").then(
			(response) => {
				const sessionsData = response.data;
				setSession(sessionsData);
				// setSession(sessionsData[0].name);
			}
		);
	}, []);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleDeleteSession = async (id) => {
		// Show a confirmation modal
		const isConfirmed = window.confirm(
			"Are you sure you want to delete this session?"
		);

		if (isConfirmed) {
			// Send a DELETE request to delete the session
			await Axios.delete(`http://localhost:8085/api/sessions/${id}`)
				.then(() => {
					// Optionally, update the state to remove the deleted session
					// Reload the session list or make other necessary updates
				})
				.catch((error) => {
					console.error("Error deleting session: ", error);
				});
		}
	};
	return (
		<div className="container__sessions">
			<div>
				<h2>Liste des Séances</h2>
				<div>
					<Link to="/addSession">Créer une séance</Link>
				</div>
				<div>
					<Link to="/create">Ajouter une photo</Link>
				</div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>nom de la séance</th>
							<th>nom du client</th>
							<th>séance évaluée</th>
							<th>évaluation</th>
							<th>commentaire</th>
							<th>date de la séance</th>
							<th>photo de la séance</th>
						</tr>
					</thead>
					<tbody>
						{session.map((item) => {
							return (
								<tr key={item.id}>
									<td>{item.id}</td>
									<td>{item.name}</td>
									<td>{item.user_id}</td>
									<td>{item.isRating}</td>
									<td>{item.rate}</td>
									<td>{item.comment}</td>
									<td>{item.createdAt}</td>
									<td></td>
									<td>
										<Link to={`/viewSession/:${item.id}`}>
											<button type="button">Voir</button>
										</Link>

										<Link to={`/editSession/:${item.id}`}>
											<button type="button">Edit</button>
										</Link>

										<button type="button" onClick={openModal}>
											Ouvrir la pop-up
										</button>
										<CustomModal
											isOpen={isModalOpen}
											onRequestClose={closeModal}
										>
											{" "}
											<p>test</p>
										</CustomModal>
									</td>
									<td>
										<button
											type="button"
											onClick={() => {
												handleDeleteSession(item.id);
											}}
										>
											Supprimer
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
					{/* <tbody>
						{sessions.map((item, index) => {
							return (
								<tr key={index}>
									<td>{item.id}</td>
									<td>{item.category}</td>
									<td>{item.sessionUser}</td>
									<td>{item.isRating}</td>
									<td>{item.rate}</td>
									<td>{item.comment}</td>
									<td>{item.date}</td>
									<td>{item.picture}</td>
									<td>
										<button type="button">Voir</button>
										<button type="button">Edit</button>
									</td>
									<td>
										<button type="button">Supprimer</button>
									</td>
								</tr>
							);
						})}
					</tbody> */}
				</table>
			</div>
		</div>
	);
}

export default Sessions;
