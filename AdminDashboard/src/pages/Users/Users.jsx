import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import CustomModal from "../../components/Modal/Modal";
// import { user } from "../../../data/data";
import "./users.css";
function Users() {
	const [user, setUser] = useState([]);

	useEffect(() => {
		Axios.get("http://localhost:8085/api/users").then((response) => {
			const usersData = response.data;
			setUser(usersData);
			// setSession(sessionsData[0].name);
		});
	}, []);

	const [isModalOpen, setIsModalOpen] = useState(false);

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	const handleDeleteUser = async (id) => {
		// Show a confirmation modal
		const isConfirmed = window.confirm(
			"Are you sure you want to delete this user?"
		);

		if (isConfirmed) {
			// Send a DELETE request to delete the user
			await Axios.delete(`http://localhost:8085/api/deleteUser/${id}`)
				.then(() => {
					// Optionally, update the state to remove the deleted user
					// Reload the user list or make other necessary updates
				})
				.catch((error) => {
					console.error("Error deleting user: ", error);
				});
		}
	};
	return (
		<div className="container__user">
			<div>
				<h2>Liste des clients</h2>
				<div>
					<Link to="/create">Ajouter un client</Link>
				</div>
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>Prénom</th>
							<th>Nom</th>
							<th>Email</th>
						</tr>
					</thead>
					<tbody>
						{user.map((user, index) => {
							return (
								<tr key={index}>
									<td>{user.id}</td>
									<td>{user.firstname}</td>
									<td>{user.lastname}</td>
									<td>{user.email}</td>
									<td>
										<Link to={`/viewUser/:${user.id}`}>
											<button type="button">Voir</button>
										</Link>

										<Link to={`/editUser/:${user.id}`}>
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
												handleDeleteUser(user.id);
											}}
										>
											Supprimer
										</button>
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default Users;
