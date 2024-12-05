import express from "express";
import {
	addAdmin,
	getAdmins,
	authAdmin,
} from "../controllers/admin_dashboard.controller.js";

const router = express.Router();

router.get("/", getAdmins);
router.post("/auth", authAdmin);
router.post("/", addAdmin);

export default router;
