const request = require("supertest");
const knex = require("../knex");
const app = require("../server");
const destroyDb = require("./cleanup/destroyDb");

beforeAll(async () => {
  await knex.migrate.latest();
  await knex.seed.run({ directory: "./tests/fixtures", specific: "users.js" });
});

afterAll(async () => {
  await knex.destroy();
  await destroyDb();
});

describe("Users", () => {
  it("should return a list of users", async () => {
    const res = await request(app).get("/users");
    expect(res.body).toEqual([
      {
        id: 1,
        name: "John Doe",
        email: "john@test.com",
      },
      {
        id: 2,
        name: "Jane Doe",
        email: "jane@test.com",
      },
    ]);
  });
});

//
