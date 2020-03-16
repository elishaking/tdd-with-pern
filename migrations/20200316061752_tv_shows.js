const knex = require("knex");

/**
 * Creates table: `shows` with some columns
 *
 * @param {knex} knex
 */
exports.up = knex => {
  return knex.schema.createTable("shows", table => {
    table.increments();
    table
      .string("name")
      .notNullable()
      .unique();
    table.string("channel").notNullable();
    table.string("genre").notNullable();
    table.integer("rating").notNullable();
    table.boolean("explicit").notNullable();
  });
};

/**
 * Drops table: `shows`
 *
 * @param {knex} knex
 */
exports.down = knex => {
  return knex.schema.dropTable("shows");
};
