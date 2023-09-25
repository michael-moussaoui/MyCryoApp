import Modal from "react-modal";
import "./modal.css";

const customStyles = {
	content: {
		width: "35vw",
		height: "60vh",
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)",
		border: "solid 2px #359",
	},

	closeButton: {
		position: "absolute", // Position absolue par rapport à la modal
		bottom: "10px", // À ajuster selon votre préférence
		right: "10px", // À ajuster selon votre préférence
		cursor: "pointer", // Curseur pointeur au survol
	},
};

const CustomModal = ({ isOpen, onRequestClose, children }) => {
	return (
		<div className="container__modal">
			<Modal
				isOpen={isOpen}
				onRequestClose={onRequestClose}
				contentLabel="Example Modal"
				style={customStyles}
			>
				{children}
				<h2>Ma Pop-up</h2>
				<p>Contenu de la pop-up.</p>
				<button
					type="button"
					className="modal__button"
					onClick={onRequestClose}
				>
					Fermer
				</button>
			</Modal>
		</div>
	);
};

export default CustomModal;
