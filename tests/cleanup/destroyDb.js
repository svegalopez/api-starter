const mysql = require("mysql");

module.exports = function () {
  return new Promise((res, rej) => {
    const conn = mysql.createConnection({
      host: process.env.DEV_HOST,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
    });

    conn.connect(function (err) {
      if (err) rej(err);
      conn.query(
        `DROP DATABASE IF EXISTS ${process.env.DEV_DBNAME}`,
        function (err) {
          if (err) return rej(err);
          conn.end();
          res();
        }
      );
    });
  });
};
