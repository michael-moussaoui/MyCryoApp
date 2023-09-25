// import { useState, useEffect } from "react";
// import Axios from "axios";
// import { useParams } from "react-router-dom";

// function ViewSession() {
// 	const { sessionId } = useParams();
// 	const [session, setSession] = useState({});

// 	useEffect(() => {
// 		Axios.get(`http://localhost:8085/api/sessions/${sessionId}`)
// 			.then((response) => {
// 				console.log(response);

// 				const sessionsData = response.data;
// 				setSession(sessionsData);

// 				// setSession(sessionsData[0].name);
// 			})
// 			.catch((error) => {
// 				console.error("Error fetching session details:", error);
// 			});
// 	}, [sessionId]);
// 	// if (!session) {
// 	// 	return <div>Loading session details...</div>;
// 	// }

// 	return (
// 		<div>
// 			<h2>Détails de la séance</h2>
// 			<p></p>
// 		</div>
// 	);
// }

// export default ViewSession;
