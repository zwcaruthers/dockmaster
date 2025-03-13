const express = require("express");
const cors = require("cors");
const supabase = require("./db"); // Import Supabase client

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("DockMaster API is running!");
});

// 🚤 API Route: Get All Boats
app.get("/boats", async (req, res) => {
  try {
    const { data, error } = await supabase.from("boats").select("*");
    if (error) throw error;
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// 🚤 API Route: Add a New Boat
app.post("/boats", async (req, res) => {
  try {
    const { name, description, status } = req.body;

    // Validate input
    if (!name || !status) {
      return res.status(400).json({ error: "Name and status are required" });
    }

    // Insert into Supabase
    const { data, error } = await supabase
      .from("boats")
      .insert([{ name, description, status }])
      .select("*");

    if (error) throw error;

    res.status(201).json(data[0]); // Return the newly created boat
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
