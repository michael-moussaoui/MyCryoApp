import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menu } from "../../../data/data.js";
import axios from "axios";

import "./menu.css";

function Menu() {
	const [session, setSession] = useState([]);
	useEffect(() => {
		axios
			.get("http://localhost:8086/api/sessions")
			.then((response) => {
				const sessionsData = response.data;
				setSession(sessionsData);
				// setSession(sessionsData[0].name);
			});
	}, []);
	// if (!session) return null;
	return (
		<div className="menu">
			{menu.map((item) => (
				<div className="menu__item" key={item.id}>
					<span className="item__title">{item.title}</span>
					{item.listItems.map((listItem) => (
						<Link
							to={listItem.url}
							className="listItem"
							key={listItem.id}
						>
							<img src={listItem.icon} alt="" />
							<span className="listItem__title">
								{listItem.title}
							</span>
						</Link>
					))}
				</div>
			))}
			{/* <p>{session}</p> */}
			<ul>
				{session.map((session) => (
					<li key={session.id}>{session.name}</li>
				))}
			</ul>

			{/* <div className="item">
				<span className="title">MAIN</span>
				<Link to="/" className="listItem">
					<img src="home.svg" alt="" />
					<span className="listItemTitle">Accueil</span>
				</Link>
				<Link to="/users" className="listItem">
					<img src="user.svg" alt="" />
					<span className="listItemTitle">Clients</span>
				</Link>
			</div> */}
		</div>
	);
}

export default Menu;
