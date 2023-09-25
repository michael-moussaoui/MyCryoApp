import User from "../models/user/userModel.js";
import bcrypt from "bcrypt";

export const getUsers = async (req, res) => {
	try {
		const response = await User.findAll({
			attributes: ["firstname", "lastname", "role", "email"],
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const getUserById = async (req, res) => {
	try {
		const response = await User.findOne({
			attributes: ["firstname", "lastname", "role", "email"],
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(response);
	} catch (error) {
		res.status(500).json({ msg: error.message });
	}
};

export const createUser = async (req, res) => {
	const { name, email, password, confPassword, role } = req.body;
	if (password !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password and Confirm Password do not match" });
	const hashPassword = await bcrypt.hash(password);
	try {
		await User.create({
			name: name,
			email: email,
			role: role,
			password: hashPassword,
		});
		res.status(201).json({ msg: "Register success" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const updateUser = async (req, res) => {
	const user = await User.findOne({
		where: {
			id: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User not found" });
	const { name, email, password, confPassword, role } = req.body;
	let hashPassword;
	if (password === "" || password === null) {
		hashPassword = user.password;
	} else {
		hashPassword = await bcrypt.hash(password);
	}
	if (password !== confPassword)
		return res
			.status(400)
			.json({ msg: "Password and Confirm Password do not match" });
	try {
		await User.update(
			{
				name: name,
				email: email,
				password: hashPassword,
				role: role,
			},
			{
				where: {
					id: user.id,
				},
			}
		);
		res.status(200).json({ msg: "User Updated" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};

export const deleteUser = async (req, res) => {
	const user = await User.findOne({
		where: {
			uuid: req.params.id,
		},
	});
	if (!user) return res.status(404).json({ msg: "User not found" });
	try {
		await User.destroy({
			where: {
				id: user.id,
			},
		});
		res.status(200).json({ msg: "User Deleted" });
	} catch (error) {
		res.status(400).json({ msg: error.message });
	}
};
