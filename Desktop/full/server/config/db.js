require("dotenv").config({});
var pg = require("pg");
pg.defaults.ssl = true;

const Sequelize = require("sequelize");

let sequelize;

if (process.env.NODE_ENV.toString() === "development") {
  sequelize = new Sequelize("test", "root", "", {
    dialect: "mysql",
    host: "localhost",
    define: {
      timestamp: "true",
    },
  });
} else {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    protcol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // <<<<<<< YOU NEED THIS
      },
    },
    ssl: true,
  });
}

module.exports = sequelize;
