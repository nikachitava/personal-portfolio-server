import express from "express";
import {
	addProject,
	deleteProject,
	getProjects,
} from "../controllers/projects.controller.js";

const router = express.Router();

router.get("/", getProjects);
router.post("/addproject/", addProject);
router.delete("/deleteproject/:id", deleteProject);

export default router;
