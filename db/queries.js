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

/**
 * Update one show with the given `showID`
 * @param {string} showID
 * @param {any} updates
 */
const update = (showID, updates) => {
  return Shows()
    .where("id", parseInt(showID))
    .update(updates);
};

/**
 * Delete one show with the given `showID`
 * @param {string} showID
 */
const deleteItem = showID => {
  return Shows()
    .where("id", parseInt(showID))
    .del();
};

module.exports = {
  getAll,
  getSingle,
  add,
  update,
  deleteItem
};
