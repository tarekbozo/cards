const express = require("express");
const connectDB = require("./config/db");

const app = express();

//connect DB
connectDB();

// Init Middelware
app.use(express.json({ extended: false }));

// app.get("/", (req, res) => res.json({ msg: " welcom to business cards API..." }));

// Routes
app.use("/api/contacts", require("./routes/businessCards"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
