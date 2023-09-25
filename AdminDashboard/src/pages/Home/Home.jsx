import { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import BarChart from "../../components/Charts/BarChart";
import PieChart from "../../components/Charts/PieChart";

import "./home.css";

function Home() {
	const [auth, setAuth] = useState(false);
	// const [firstname, setFirstname] = useState("");
	const [message, setMessage] = useState("");
	const [role, setRole] = useState("");

	axios.defaults.withCredentials = true;
	useEffect(() => {
		axios.get("http://localhost:8085/home").then((res) => {
			console.log(res);
			if (res.data.Status === "Success") {
				setAuth(true);
				setRole(res.data.role);
				// setFirstname(res.data.firstname);
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
		<div className="home">
			{auth ? (
				<>
					<div>
						<p>Bonjour vous connecté en tant que : {role}</p>
						<button type="button" onClick={handleLogout}>
							Se déconnecter
						</button>
					</div>
					<div className="chartContainer one">
						{" "}
						<BarChart />{" "}
					</div>
					<div className="chartContainer two">
						{" "}
						<PieChart />{" "}
					</div>
					<div className="chartContainer three">
						{" "}
						<BarChart />{" "}
					</div>
					<div className="chartContainer">
						{" "}
						<BarChart />{" "}
					</div>
				</>
			) : (
				<div>
					<h3 className="">{message}</h3>
					<Link to="/Login" type="button">
						Se connecter
					</Link>
				</div>
			)}
		</div>
	);
}

export default Home;
