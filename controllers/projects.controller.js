import Project from "../models/projects.models.js";

export const getProjects = async (req, res) => {
	try {
		const projects = await Project.find({});
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const addProject = async (req, res) => {
	try {
		const project = await Project.create(req.body);
		res.status(201).json(project);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const getProject = async (req, res) => {
	try {
		const { id } = req.params;
		const projects = await Project.findOne({ _id: id });
		res.status(200).json(projects);
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};

export const deleteProject = async (req, res) => {
	try {
		const { id } = req.params;

		const deletedProject = await Project.findByIdAndDelete(id);

		if (!deletedProject)
			return res.status(404).json({ message: "Project not found" });

		res.status(200).json({
			message: "Project deleted successfully",
		});
	} catch (error) {
		res.status(500).json({ message: error.message });
	}
};
