import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/proxy", async (req, res) => {
    const { url, data } = req.body;
    try {
        const response = await axios.post(url, data);
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Request blocked or failed" });
    }
});

app.listen(3000, () => console.log("Proxy running on port 3000"));
