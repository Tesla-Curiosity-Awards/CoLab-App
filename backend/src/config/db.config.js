const { Sequelize } = require("sequelize");

const connect = async () => {
  const sequelize = new Sequelize("postgres://postgres@localhost:5432/colab");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

exports = { connect };
