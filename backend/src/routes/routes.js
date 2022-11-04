const express = require("express");
const router = express.Router();
const db = require("../config/db.config");
const { Avatar } = require("../models/Colab");

router.get("/avatars", async (req, res, err) => {
  const result = err
    ? await Avatar.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/avatars/:id", async (req, res, err) => {
  const {id} = req.params;
  const result = err
    ? await Avatar.findAll({
      where:{
        id : id
      }
    })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.post("/avatars", async (req, res) => {
  const {avatar} = req.body;
  const result = await Avatar.create({avatar});
  console.log('added avatar');
  res.sendStatus(200);
});

router.put("/avatars/:id", async (req, res) => {
  const {id} = req.params;
  const {avatar} = req.body;
  const result = await Avatar.update({avatar},{where:{
    id: id
  }});
  console.log('updated avatar');
  res.sendStatus(200);
});

module.exports = router;
