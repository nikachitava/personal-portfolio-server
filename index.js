import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import projectsRoute from "./routes/projects.route.js";

const app = express();

app.use(
	cors({
		origin: process.env.CLIENT_URI,
		credentials: true,
	})
);
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello from Node API Server Updated");
});

const PORT = 3000;
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

app.use("/projects", projectsRoute);

export default app;
