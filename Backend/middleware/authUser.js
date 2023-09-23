import jwt from "jsonwebtoken";

export const verifyUser = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.json({ Error: "You are not authentincated" });
	} else {
		jwt.verify(token, "jwt-secret-key", (err, decoded) => {
			if (err) {
				return res.json({ Error: "Token is not OK" });
			} else {
				req.role = decoded.role;
				req.firstname = decoded.firstname;
				next();
			}
		});
	}
};
