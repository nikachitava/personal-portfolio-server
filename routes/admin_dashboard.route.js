import express from "express";

const router = express.Router();

router.post("/", addAdmin);

export default router;
