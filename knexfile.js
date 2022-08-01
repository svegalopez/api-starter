require("dotenv").config();

const envs = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.DEV_HOST,
      database: process.env.DEV_DBNAME,
      user: process.env.DEV_USER,
      password: process.env.DEV_PASSWORD,
    },
  },
  production: {
    client: "mysql",
    connection: process.env.JAWSDB_URL,
    pool: { min: 2, max: 8 }, // Note: The free jawsdb plan has a max of 10 connections, so we want to reserve a couple for other processes
  },
};

module.exports = 
  process.env.NODE_ENV === 'production'
    ? envs.production
    : envs.development;
