const express = require("express");
const knex = require("./knex");
const app = express();

app.get("/", async (req, res) => {
  res.send(`<h1>Welcome to my API<h1>`);
});

app.get("/todos", async (req, res) => {
  res.json(await knex("todos"));
});

app.get("/users", async (req, res) => {
  res.json(await knex("users"));
});

module.exports = app;
