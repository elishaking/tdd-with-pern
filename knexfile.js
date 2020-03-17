const path = require("path");

const env = require("./env.config");

module.exports = {
  development: {
    client: "pg",
    // connection: "postgres://localhost/tdd_with_pern",
    connection: {
      database: "tdd_with_pern",
      user: "postgres",
      password: env.DB_PASSWORD
    },
    migrations: {
      directory: path.join(__dirname, "/db/migrations")
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds/development")
    }
  },

  test: {
    client: "pg",
    // connection: "postgres://localhost/tdd_with_pern_test",
    connection: {
      database: "tdd_with_pern_test",
      user: "postgres",
      password: env.DB_PASSWORD
    },
    // pool: {
    //   min: 2,
    //   max: 10
    // },
    migrations: {
      directory: path.join(__dirname, "/db/migrations")
    },
    seeds: {
      directory: path.join(__dirname, "/db/seeds/test")
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
