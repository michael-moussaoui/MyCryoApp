import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
	const [values, setValues] = useState({
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	axios.defaults.withCredentials = true;
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:8085/login", values)
			.then((res) => {
				console.log(res);
				if (res.status === 200) {
					// La connexion a réussi
					navigate("/");
				} else if (res.status === 401) {
					// Adresse e-mail ou mot de passe incorrect
					alert("Adresse e-mail ou mot de passe incorrect.");
				} else {
					// Autre erreur
					alert("Une erreur s'est produite lors de la connexion.");
				}
			})
			.catch((err) => {
				console.log(err.message);
				alert("Une erreur s'est produite lors de la connexion.");
			});
	};
	return (
		<div>
			<h2>Coonexion</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="email"></label>
					<input
						type="email"
						placeholder="Entrez votre email"
						name="email"
						onChange={(e) =>
							setValues({ ...values, email: e.target.value })
						}
					></input>
				</div>
				<div>
					<label htmlFor="password"></label>
					<input
						type="password"
						placeholder="Choisissez votre mot de passe"
						name="password"
						onChange={(e) =>
							setValues({ ...values, password: e.target.value })
						}
					></input>
				</div>
				<button type="submit">Se connecter</button>
				<p>
					Pas encore inscrit, inscrivez vous<span> ici</span>{" "}
				</p>
				<Link to={"/register"}>vers Register</Link>
			</form>
		</div>
	);
}

export default Login;
