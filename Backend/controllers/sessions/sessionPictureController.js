import SessionPicture from "../../models/sessions/sessionPictureModel.js";

export const getAllSessionsPicture = async (req, res) => {
	try {
		const sessionsPicture = await Session.findAll();
		console.log("SessionsPicture:", sessionsPicture);
		res.json(sessions);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getSessionPictureById = async (req, res) => {
	try {
		const sessionPicture = await SessionPicture.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(sessionPicture[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createSessionPicture = async (req, res) => {
	try {
		await SessionPicture.create(req.body);
		res.json({
			message: "SessionPicture Created",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateSessionPicture = async (req, res) => {
	try {
		await SessionPicture.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "SessionPicture Updated",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteSessionPicture = async (req, res) => {
	try {
		await SessionPicture.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "SessionPicture Deleted !!!",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};
