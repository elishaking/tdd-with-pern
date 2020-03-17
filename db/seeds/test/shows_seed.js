const knex = require("knex");

/**
 * Inserts seed entries
 *
 * @param {knex} knex
 */
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex("shows")
    .del()
    .then(() => {
      // Since JavaScript is asynchronous, the order that data is inserted can
      // sometimes change. We want to make sure that the data is in the same order
      // each time we run our seed file(s), therefore, the code below is preferred
      // over the one above
      return knex("shows")
        .insert({
          name: "Suits",
          channel: "USA Network",
          genre: "Drama",
          rating: 3,
          explicit: false
        })
        .then(function() {
          return knex("shows").insert({
            name: "Game of Thrones",
            channel: "HBO",
            genre: "Fantasy",
            rating: 5,
            explicit: true
          });
        })
        .then(function() {
          return knex("shows").insert({
            name: "South Park",
            channel: "Comedy Central",
            genre: "Comedy",
            rating: 4,
            explicit: true
          });
        })
        .then(function() {
          return knex("shows").insert({
            name: "Mad Men",
            channel: "AMC",
            genre: "Drama",
            rating: 3,
            explicit: false
          });
        });
    });
};
