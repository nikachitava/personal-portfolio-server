import exrpess from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const app = exrpess();

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

// GjOJ9FlDCQJvXy6d
