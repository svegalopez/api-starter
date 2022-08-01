const mysql = require("mysql");
require("dotenv").config();

module.exports = function () {
  const dbName = "test_" + Math.floor(Math.random() * 100000);
  process.env.DEV_DBNAME = dbName;

  return new Promise((res, rej) => {
    const conn = mysql.createConnection({
      host: process.env.DEV_HOST,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
    });

    conn.connect(function (err) {
      if (err) rej(err);
      conn.query(`CREATE DATABASE ${dbName}`, function (err) {
        if (err) {
          conn.end();
          return rej(err);
        }
        conn.end();
        res();
      });
    });
  });
};
