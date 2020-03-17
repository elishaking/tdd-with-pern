const knex = require("./knex.js");

const Shows = () => {
  return knex("shows");
};

// *** queries *** //

const getAll = () => {
  return Shows().select();
};

module.exports = {
  getAll: getAll
};
