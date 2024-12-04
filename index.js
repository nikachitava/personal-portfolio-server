import exrpess from "express";
const app = exrpess();

const PORT = 3000;

app.get("/", (req, res) => {
	res.send("Hello, Express!");
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
