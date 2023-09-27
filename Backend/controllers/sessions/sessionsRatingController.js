import db from "../../database/db.js";

const SessionRating = db.SessionRating;

export const getAllSessionsRating = async (req, res) => {
	try {
		const sessionsRating = await SessionRating.findAll();
		console.log("SessionsRating:", sessionsRating);
		res.json(sessionsRating);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getSessionRatingById = async (req, res) => {
	try {
		const sessionRating = await SessionRating.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(sessionRating[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createSessionRating = async (req, res) => {
	try {
		await SessionRating.create(req.body);
		res.json({
			message: "SessionRating Created",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateSessionRating = async (req, res) => {
	try {
		await SessionRating.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "SessionRating Updated",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteSessionRating = async (req, res) => {
	try {
		await SessionRating.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "SessionRating Deleted !!!",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};
