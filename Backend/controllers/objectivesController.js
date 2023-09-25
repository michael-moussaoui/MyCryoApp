import Objective from "../../models/objectiveModel.js";

export const getAllObjectives = async (req, res) => {
	try {
		const objectives = await Objective.findAll();
		console.log("Sessions:", objectives);
		res.json(objectives);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const getObjectiveById = async (req, res) => {
	try {
		const objective = await Objective.findAll({
			where: {
				id: req.params.id,
			},
		});
		res.json(objective[0]);
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const createObjective = async (req, res) => {
	try {
		await Objective.create(req.body);
		res.json({
			message: "Objective Created",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const updateObjective = async (req, res) => {
	try {
		await Objective.update(req.body, {
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Objective Updated",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};

export const deleteObjective = async (req, res) => {
	try {
		await Objective.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.json({
			message: "Objective Deleted !!!",
		});
	} catch (error) {
		res.json({ message: error.message });
	}
};
