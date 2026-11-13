
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Portfolio projects
const projects = [
    {
        name: "MARG",
        description: "A platform that helps mentors record classroom observations and guide teachers."
    },
    {
        name: "Digital Literacy for Elderly People",
        description: "A website that helps elderly people learn digital skills through regional language support and videos."
    }
];

// Get all projects
app.get("/api/projects", (req, res) => {
    res.json(projects);
});

// Start server
app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});
