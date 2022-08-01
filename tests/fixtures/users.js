exports.seed = async function (knex) {
  await knex("users").insert([
    {
      name: "John Doe",
      email: "john@test.com",
    },
    {
      name: "Jane Doe",
      email: "jane@test.com",
    },
  ]);
};
