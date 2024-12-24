import axios from "axios";
import cron from "node-cron";

// Replace with your backend URL
const BACKEND_URL = process.env.BACK_URI || "http://localhost:3000";

// Schedule task to run every 10 minutes
cron.schedule("*/10 * * * *", async () => {
	try {
		const response = await axios.get(BACKEND_URL);
		console.log(`Keep-alive request sent. Status: ${response.status}`);
	} catch (error) {
		console.error("Keep-alive request failed:", error.message);
	}
});

console.log("Keep-alive service started");
