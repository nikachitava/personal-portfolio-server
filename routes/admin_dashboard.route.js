import express from "express";
import {
	addAdmin,
	getAdmins,
} from "../controllers/admin_dashboard.controller.js";

const router = express.Router();

router.get("/", getAdmins);
router.post("/", addAdmin);

export default router;
