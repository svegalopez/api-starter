const request = require("supertest");
const knex = require("../knex");
const app = require("../server");
const destroyDb = require("./cleanup/destroyDb");

beforeAll(async () => {
  await knex.migrate.latest();
  await knex.seed.run({ directory: "./tests/fixtures", specific: "todos.js" });
});

afterAll(async () => {
  await knex.destroy();
  await destroyDb();
});

describe("Todos", () => {
  it("should return a list of todos", async () => {
    const res = await request(app).get("/todos");
    expect(res.body).toEqual([
      {
        id: 1,
        name: "Do laundry",
        completed: 0,
      },
      {
        id: 2,
        name: "Fix car",
        completed: 0,
      },
      {
        id: 3,
        name: "Cook dinner",
        completed: 0,
      },
    ]);
  });
});
