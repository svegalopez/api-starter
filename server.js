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

// New
app.get("/my-new-endpoint", (req, res) => {
  res.send("OK");
});

app.get("/five-things", (req, res) => {
  res.json(["Can", "Tub", "Sprinkler", "Palm", "Couch"]);
});

module.exports = app;
