import AdminDashboard from "../models/admin_dashboard.model.js";
import jwt from "jsonwebtoken";

export const getAdmins = async (req, res) => {
	try {
		const admins = await AdminDashboard.find({});
		res.status(200).json(admins);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addAdmin = async (req, res) => {
	try {
		const newAdmin = await AdminDashboard.create(req.body);
		res.status(200).json(newAdmin);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const authAdmin = async (req, res) => {
	try {
		const { email, password } = req.body;

		if (!email)
			return res.status(400).json({ mesage: "Email is required" });
		if (!password)
			return res.status(400).json({ mesage: "Password is required" });

		const admin = await AdminDashboard.findOne({ email: email });

		if (!admin)
			return res
				.status(401)
				.json({
					message: "Invalid admin email",
					errorType: "INVALID_EMAIL",
				});

		if (admin.password !== password)
			return res
				.status(401)
				.json({
					message: "Invalid admin password",
					errorType: "INVALID_PASSWORD",
				});

		const token = jwt.sign(
			{ id: admin._id, email: admin.email },
			// process.env.SECRET_KEY,
			"STRONG_SECRET_KEY_FOR_ADMIN_dashboard!",
			{ expiresIn: "1h" }
		);
		res.status(200).json({ message: "Authorized successfully", token });
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
