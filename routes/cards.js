const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

// @route    POST api/businessCards
// @desc     Add new businessCard

router.post("/", async (req, res) => {
  const { name, sureName, email, phone } = req.body;

  try {
    const newCard = new Card({
      name,
      sureName,
      email,
      phone
    });

    const card = await newCard.save();
    res.json(card);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    PUT api/businessCards/:id
// @desc     Update businessCard

router.put("/:id", async (req, res) => {
  const { name, sureName, email, phone } = req.body;

  const cardFields = {};
  if (name) cardFields.name = name;
  if (sureName) cardFields.sureName = sureName;
  if (email) cardFields.email = email;
  if (phone) cardFields.phone = phone;

  try {
    let card = await Card.findById(req.params.id);

    if (!card) return res.status(404).json({ msg: "Card not found" });

    card = await Card.findByIdAndUpdate(
      req.params.id,
      { $set: cardFields },
      { new: true }
    );

    res.json(card);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route    DELETE api/businessCards/:id
// @desc     Delete businessCard

router.delete("/:id", async (req, res) => {
  try {
    let card = await Card.findById(req.params.id);

    if (!card) return res.status(404).json({ msg: "Card not found" });

    await Card.findByIdAndRemove(req.params.id);
    res.json({ msg: " Card removed" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
