const express = require("express");
const router = express.Router();
const db = require("../config/db.config");
const {
  Avatar,
  Role,
  Topic,
  Content,
  User,
  Session,
} = require("../models/Colab");

//____________________ Avatars  ____________________
router.get("/avatars", async (req, res, err) => {
  const result = err
    ? await Avatar.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/avatars/:id", async (req, res, err) => {
  const { id } = req.params;
  const result = err
    ? await Avatar.findAll({
        where: {
          id: id,
        },
      })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.post("/avatars", async (req, res) => {
  const { avatar } = req.body;
  const result = await Avatar.create({ avatar });
  console.log("added avatar:", result);
  res.sendStatus(200);
});

router.put("/avatars/:id", async (req, res) => {
  const { id } = req.params;
  const { avatar } = req.body;
  const result = await Avatar.update(
    { avatar },
    {
      where: {
        id: id,
      },
    }
  );
  console.log("Updated avatar to", avatar);
  res.sendStatus(200);
});

//____________________ Roles  ____________________
router.get("/roles", async (req, res, err) => {
  const result = err
    ? await Role.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/roles/:id", async (req, res, err) => {
  const { id } = req.params;
  const result = err
    ? await Role.findAll({
        where: {
          id: id,
        },
      })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.put("/roles/:id", async (req, res) => {
  const { id } = req.params;
  const { role } = req.body;
  const result = await Role.update(
    { role },
    {
      where: {
        id: id,
      },
    }
  );
  console.log("Updated role to", role);
  res.sendStatus(200);
});

router.post("/roles", async (req, res) => {
  const { role } = req.body;
  const result = await Role.create({ role });
  console.log(role, "role added!!!");
  res.sendStatus(200);
});

//____________________ Topics  ____________________
router.get("/topics", async (req, res, err) => {
  const result = err
    ? await Topic.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/topics/:id", async (req, res, err) => {
  const { id } = req.params;
  const result = err
    ? await Topic.findAll({
        where: {
          id: id,
        },
      })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.put("/topics/:id", async (req, res) => {
  const { id } = req.params;
  const { topic } = req.body;
  const result = await Topic.update(
    { topic },
    {
      where: {
        id: id,
      },
    }
  );
  console.log("Updated topic to", topic);
  res.sendStatus(200);
});

router.post("/topics", async (req, res) => {
  const { topic } = req.body;
  const result = await Topic.create({ topic });
  console.log(topic, "topic added!!!");
  res.sendStatus(200);
});

//____________________ Content  ____________________
router.get("/content", async (req, res, err) => {
  const result = err
    ? await Content.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/content/:id", async (req, res, err) => {
  const { id } = req.params;
  const result = err
    ? await Content.findAll({
        where: {
          id: id,
        },
      })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.put("/content/:id", async (req, res) => {
  const { id } = req.params;
  const { content } = req.body;
  const result = await Content.update(
    { content },
    {
      where: {
        id: id,
      },
    }
  );
  console.log("Updated content to", content);
  res.sendStatus(200);
});

router.post("/content", async (req, res) => {
  const { content } = req.body;
  const result = await Content.create({ content });
  console.log(content, "content added!!!");
  res.sendStatus(200);
});

//____________________ Users  ____________________
router.get("/users", async (req, res, err) => {
  const result = err
    ? await User.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/users/:id", async (req, res, err) => {
  const { id } = req.params;
  const result = err
    ? await User.findAll({
        where: {
          id: id,
        },
      })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { user } = req.body;
  const result = await User.update(
    { user },
    {
      where: {
        id: id,
      },
    }
  );
  console.log("Updated user to", user);
  res.sendStatus(200);
});

router.post("/users", async (req, res) => {
  const { user } = req.body;
  const result = await User.create({ user });
  console.log(user, "user added!!!");
  res.sendStatus(200);
});

//____________________ Sessions  ____________________
router.get("/session", async (req, res, err) => {
  const result = err
    ? await Session.findAll()
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.get("/session/:id", async (req, res, err) => {
  const { id } = req.params;
  const result = err
    ? await Session.findAll({
        where: {
          id: id,
        },
      })
    : "Oops something went wrong, Please try again later";
  res.send(result);
});

router.put("/session/:id", async (req, res) => {
  const { id } = req.params;
  const { key } = req.body;
  const result = await Session.update(
    { key },
    {
      where: {
        id: id,
      },
    }
  );
  console.log("Updated key to", key);
  res.sendStatus(200);
});

router.post("/session", async (req, res) => {
  const { key } = req.body;
  const result = await Session.create({ key });
  console.log(key, "key added!!!");
  res.sendStatus(200);
});

module.exports = router;
