import mongoose from "mongoose";

const ProjectSchema = mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please enter project name"],
		},

		description: {
			type: String,
			required: [true, "Please describe your project"],
		},

		github_link: {
			type: String,
			required: [true, "Please enter github link"],
		},

		tech_stack: {
			type: String,
			required: [true, "Please enter the tech stack"],
		},

		live_link: {
			type: String,
			required: false,
		},

		image: {
			type: [String],
			required: false,
		},
	},
	{
		timestamps: true,
	}
);

const Project = mongoose.model("Project", ProjectSchema);
export default Project;
