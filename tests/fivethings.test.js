const request = require("supertest");
const app = require("../server");

describe("Todos", () => {
  it("should return a list of 5 things", async () => {
    const res = await request(app).get("/five-things");
    expect(res.body).toEqual(["Can", "Tub", "Sprinkler", "Palm", "Couch"]);
  });
});
