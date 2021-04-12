import express from "express";
import path from "path";

const __dirname = path.resolve();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static("public"));

app.get("/", (req, res) => 
{
    res.sendFile(path.join(__dirname, "public", "html", "index.html"));
});

app.listen(port, () => 
{
    console.log(`Server running on http://localhost:${port}`);
});