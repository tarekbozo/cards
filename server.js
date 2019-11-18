const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

// Init Middelware
app.use(express.json({ extended: false }));

app.get("/", (req, res) => res.json({ msg: " business cards API..." }));

// Routes
app.use("/api/cards", require("./routes/cards"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
