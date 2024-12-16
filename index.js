import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import projectsRoutes from "./routes/projects.route.js";
import adminRoutes from "./routes/admin_dashboard.route.js";

const app = express();

app.use((req, res, next) => {
	res.header("Access-Control-Allow-Credentials", true);
	next();
});

app.use(
	cors({
		origin: process.env.CLIENT_URI,
		credentials: true,
	})
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.send("Hello from Node API Server Updated");
});

const PORT = 5000;
mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log("Connected to database");
		app.listen(PORT, () => {
			console.log(`Server running on port ${PORT}`);
		});
	})
	.catch(() => {
		console.log("Connected failed");
	});

app.use("/projects", projectsRoutes);
app.use("/admin", adminRoutes);

export default app;
