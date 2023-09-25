import SessionSearch from "../../models/sessions/sessionSearchModel.js";

export const getAllSessionsSearch = async (req, res) => {
	try {
		const sessionsSearch = await SessionSearch.findAll();
		console.log("SessionsSearch:", sessionsSearch);
		res.json(sessionsSearch);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getSessionSearchById = async (req, res) => {
	try {
		const sessionSearch = await SessionSearch.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(sessionSearch[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createSessionSearch = async (req, res) => {
	try {
		await SessionSearch.create(req.body);
		res.json({
			message: "SessionSearch Created",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateSessionSearch = async (req, res) => {
	try {
		await SessionSearch.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "SessionSearch Updated",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteSessionSearch = async (req, res) => {
	try {
		await SessionSearch.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "SessionSearch Deleted !!!",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};
