//const { Sequelize } = require("sequelize");
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres://postgres@localhost:5432/colab");
sequelize.showAllSchemas().then((res) => console.log(res));
