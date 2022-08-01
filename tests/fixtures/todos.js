exports.seed = async function (knex) {
  await knex("todos").insert([
    {
      name: "Do laundry",
      completed: false,
    },
    {
      name: "Fix car",
      completed: false,
    },
    {
      name: "Cook dinner",
      completed: false,
    },
  ]);
};
