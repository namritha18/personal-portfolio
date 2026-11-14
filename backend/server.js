require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();

app.use(cors());
app.use(express.json());

// Connect to Supabase
const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_ANON_KEY
);

// Get projects from Supabase
app.get("/api/projects", async (req, res) => {
    const { data, error } = await supabase
        .from("projects")
        .select("*");

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.json(data);
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});