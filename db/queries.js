const knex = require("./knex.js");

const Shows = () => {
  return knex("shows");
};

// *** queries *** //

/**
 * Get all shows
 */
const getAll = () => {
  return Shows().select();
};

/**
 * Get one show with given `showID`
 * @param {string} showID
 */
const getSingle = showID => {
  return Shows()
    .where("id", parseInt(showID))
    .first();
};

/**
 * Add one show
 * @param {any} show
 */
const add = show => {
  return Shows().insert(show, "id");
};

module.exports = {
  getAll,
  getSingle,
  add
};
