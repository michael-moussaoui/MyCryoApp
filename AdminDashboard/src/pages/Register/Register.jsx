import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./register.css";

function Register() {
	const [values, setValues] = useState({
		firstname: "",
		lastname: "",
		role: "utilisateur",
		email: "",
		password: "",
	});
	const navigate = useNavigate();
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:8085/register", values)
			.then((res) => {
				if (res.data.Status === "Success") {
					navigate("/login");
				} else {
					alert("Error");
				}
			})
			.then((err) => console.log(err));
	};

	return (
		<div className="register">
			<div className="register__logo">
				<img
					className="logo__register"
					src="attitudeLogo.svg"
					alt=""
				/>
			</div>
			<h2 className="register__title">Inscription</h2>
			<form onSubmit={handleSubmit} className="register__form">
				<div className="form__input">
					<label htmlFor="firstname"></label>
					<input
						type="text"
						placeholder="Entrez votre prénom"
						name="firstname"
						onChange={(e) =>
							setValues({ ...values, firstname: e.target.value })
						}
					></input>
				</div>

				<div className="form__input">
					<label htmlFor="lastname"></label>
					<input
						type="text"
						placeholder="Entrez votre nom"
						name="lastname"
						onChange={(e) =>
							setValues({ ...values, lastname: e.target.value })
						}
					></input>
				</div>
				<div className="form__input">
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
				<div className="form__input">
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
				<button type="submit" className="form__button">
					S&apos;inscrire
				</button>
				<p className="">
					déja inscrit, connectez vous
					<Link to={"/Login"} className="link">
						ici
					</Link>
				</p>
			</form>
		</div>
	);
}

export default Register;
