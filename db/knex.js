const configs = require("../knexfile.js");

const environment = process.env.NODE_ENV || "development";

module.exports = require("knex")(configs[environment]);
