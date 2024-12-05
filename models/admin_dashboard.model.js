import mongoose from "mongoose";

const AdminDashboardSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter your name"],
		},

		surname: {
			type: String,
			required: [true, "Please enter your surname"],
		},

		email: {
			type: String,
			required: [true, "Please enter your email"],
		},

		password: {
			type: String,
			required: [true, "Please enter admin password"],
		},
	},
	{
		timestamps: true,
	}
);

const AdminDashboard = mongoose.model("AdminDashboard", AdminDashboardSchema);
export default AdminDashboard;
