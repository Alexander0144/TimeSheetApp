const Sequelize = require("sequelize");
const env=require("./env");

const connectionConfig = {
  host: env.db.host,
  dialect: env.db.dialect,
  operatorAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  ssl: false,
  dialectOptions: {
    ssl: {
      require: false,
    },
  },
};
const db = new Sequelize(
  env.db.name,
  env.db.user,
  env.db.password,
  connectionConfig
);

module.exports = db;
