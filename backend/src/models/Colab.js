const Sequelize = require("sequelize");
const db = require("../config/db.config");

const User = db.define(
  "users",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: Sequelize.STRING,
    },
    roleID: {
      type: Sequelize.INTEGER,
    },
    sessionID: {
      type: Sequelize.INTEGER,
    },
    avatarID: {
      type: Sequelize.INTEGER,
    },
  },
  { timestamps: false }
);

const Avatar = db.define(
  "Avatars",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    avatar: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);
module.exports = { User, Avatar };
