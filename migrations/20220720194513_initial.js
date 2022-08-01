exports.up = async function (knex) {
  await knex.schema.createTable("todos", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.boolean("completed").notNullable();
  });

  await knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").unique().notNullable();
  });
};

exports.down = async function (knex) {
  await knex.schema.dropTable("users");
  await knex.schema.dropTable("todos");
};
