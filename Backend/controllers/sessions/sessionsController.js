import Session from "../../models/sessions/sessionModel.js";

export const getAllSessions = async (req, res) => {
	try {
		const sessions = await Session.findAll();
		console.log("Sessions:", sessions);
		res.json(sessions);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getSessionById = async (req, res) => {
	try {
		const session = await Session.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(session[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createSession = async (req, res) => {
	try {
		await Session.create(req.body);
		res.json({
			message: "Session Created",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateSession = async (req, res) => {
	try {
		await Session.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Session Updated",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteSession = async (req, res) => {
	try {
		await Session.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Session Deleted !!!",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};
