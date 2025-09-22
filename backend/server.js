import express from "express";
const app = express();

app.get("/", (req, res) => res.send("working"));
app.listen(8000, console.log("server running on port http://localhost:8000"));