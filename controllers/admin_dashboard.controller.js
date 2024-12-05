import AdminDashboard from "../models/admin_dashboard.model.js";

export const addAdmin = async (req, res) => {
	try {
		const newAdmin = await AdminDashboard.create(req.body);
		res.status(200).json(newAdmin);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
