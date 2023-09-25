import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./navbar.css";
function Navbar() {
	const [auth, setAuth] = useState(false);
	const [firstname, setFirstname] = useState("");
	const [message, setMessage] = useState("");

	axios.defaults.withCredentials = true;
	useEffect(() => {
		axios.get("http://localhost:8085").then((res) => {
			if (res.data.Status === "Success") {
				setAuth(true);
				setFirstname(res.data.firstname);
			} else {
				setMessage("Vous n'avez pas accès à cette page");
			}
		});
	}, []);

	const navigate = useNavigate();
	const handleLogout = () => {
		axios
			.get("http://localhost:8085/logout")
			.then((res) => {
				if (res.data.Status === "Success") {
					navigate("/login");
					location.reload();
				} else {
					alert("error");
				}
			})
			.catch((err) => console.log(err));
	};
	return (
		<div className="navbar">
			<div className="Containerlogo">
				<img className="logo" src="attitudeLogo.svg" alt="" />
			</div>
			<div className="icons">
				<img src="search.svg" alt="logo_recherche" className="icon" />
				<button
					type="button"
					className="icons__button"
					onClick={handleLogout}
				>
					<img
						src="profile.svg"
						alt="icon utilisateur"
						className="icon__user"
					/>
				</button>

				<div className="user">
					<span>{firstname}</span>
				</div>
				<img
					src="setting.svg"
					alt="logo_parametres"
					className="icon__userFirstname"
				/>
				<p>{auth}</p>
				<p>{message}</p>
			</div>
		</div>
	);
}

export default Navbar;
