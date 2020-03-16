const path = require("path");

module.exports = {
  development: {
    client: "pg",
    connection: "postgres://localhost/tdd_with_pern"
  },

  test: {
    client: "pg",
    // connection: {
    //   database: "my_db",
    //   user: "username",
    //   password: "password"
    // },
    connection: "postgres://localhost/tdd_with_pern_test",
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: path.join(__dirname, "/db/migrations")
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds/development")
    }
  },

  production: {
    client: "pg",
    // connection: {
    //   database: "my_db",
    //   user: "username",
    //   password: "password"
    // },
    connection: process.env.DATABASE_URL,
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: path.join(__dirname, "/db/migrations")
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds/production")
    }
  }
};
