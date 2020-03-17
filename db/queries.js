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

module.exports = {
  getAll,
  getSingle
};
