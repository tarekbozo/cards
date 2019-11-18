const express = require("express");
const connectDB = require("./config/db");
const fileUpload = require("express-fileupload");

const app = express();

app.use(fileUpload());

//connect DB
connectDB();

// Init Middelware
app.use(express.json({ extended: false }));

app.use(fileUpload());

// Upload Endpoint
app.post("/api/ubload", (req, res) => {
  if (req.files === null) {
    return res.status(400).json({ msg: "No file uploaded" });
  }

  const file = req.files.file;

  file.mv(`${__dirname}/client/public/uploads/${file.name}`, err => {
    if (err) {
      console.error(err);
      return res.status(500).send(err);
    }

    res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
  });
});

// Routes
app.use("/api/cards", require("./routes/cards"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`));
