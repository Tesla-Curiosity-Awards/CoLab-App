const express = require("express");
const router = express.Router();
const db = require("../config/db.config");
const { Avatar } = require("../models/Colab");

router.get("/", async (req, res) => {
  const result = await Avatar.findAll();
  console.log(result);
  res.sendStatus(200);
});

module.exports = router;
