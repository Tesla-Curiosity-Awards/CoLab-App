const Sequelize = require("sequelize");
const db = require("../config/db.config");

//CREATE
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

const Role = db.define(
  "Roles",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    role: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

const Session = db.define(
  "Sessions",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    url: {
      type: Sequelize.STRING,
    },
  },
  { timestamps: false }
);

const Content = db.define(
  "Content",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

const Topic = db.define(
  "Topics",
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
  },
  { timestamps: false }
);

module.exports = { User, Avatar, Role, Session, Content, Topic };
