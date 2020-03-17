process.env.NODE_ENV = "test";

const server = require("../app");
const request = require("supertest");

const knex = require("../db/knex");

describe("API Routes", () => {
  // Rollback the migrations before each test is ran, and then re-apply the migrations and re-seed the database
  beforeEach(done => {
    knex.migrate.rollback().then(() => {
      knex.migrate.latest().then(() => {
        return knex.seed.run().then(() => done());
      });
    });
  });

  // Rollback the migrations after each test is ran
  afterEach(done => {
    knex.migrate.rollback().then(() => done());
  });

  describe("GET /api/v1/shows", () => {
    it("should return all shows", done => {
      request(server)
        .get("/api/v1/shows")
        .then(res => {
          expect(res.status).toEqual(200);
          //   res.should.be.json; // jshint ignore:line
          expect(Array.isArray(res.body)).toBe(true);
          expect(res.body.length).toEqual(4);

          expect(res.body[0]).toHaveProperty("name");
          expect(res.body[0].name).toEqual("Suits");

          expect(res.body[0]).toHaveProperty("channel");
          expect(res.body[0].channel).toEqual("USA Network");

          expect(res.body[0]).toHaveProperty("genre");
          expect(res.body[0].genre).toEqual("Drama");

          expect(res.body[0]).toHaveProperty("rating");
          expect(res.body[0].rating).toEqual(3);

          expect(res.body[0]).toHaveProperty("explicit");
          expect(res.body[0].explicit).toBe(false);

          done();
        })
        .catch(() => done());
    });
  });

  describe("GET /api/v1/shows/:id", () => {
    it("should return a single show", done => {
      request(server)
        .get("/api/v1/shows/1")
        .then(res => {
          expect(res.status).toEqual(200);
          //   res.should.be.json; // jshint ignore:line
          expect(typeof res.body === "object").toBe(true);
          expect(res.body.length).toEqual(4);

          expect(res.body).toHaveProperty("name");
          expect(res.body.name).toEqual("Suits");

          expect(res.body).toHaveProperty("channel");
          expect(res.body.channel).toEqual("USA Network");

          expect(res.body).toHaveProperty("genre");
          expect(res.body.genre).toEqual("Drama");

          expect(res.body).toHaveProperty("rating");
          expect(res.body.rating).toEqual(3);

          expect(res.body).toHaveProperty("explicit");
          expect(res.body.explicit).toBe(false);

          done();
        })
        .catch(() => done());
    });
  });

  describe("POST /api/v1/shows", () => {
    it("should add a show", done => {
      request(server)
        .post("/api/v1/shows")
        .send({
          name: "Family Guy",
          channel: "Fox",
          genre: "Comedy",
          rating: 4,
          explicit: true
        })
        .then(res => {
          expect(res.status).toEqual(200);
          //   res.should.be.json; // jshint ignore:line
          expect(typeof res.body === "object").toBe(true);
          expect(res.body.length).toEqual(4);

          expect(res.body).toHaveProperty("name");
          expect(res.body.name).toEqual("Family Guy");

          expect(res.body).toHaveProperty("channel");
          expect(res.body.channel).toEqual("Fox");

          expect(res.body).toHaveProperty("genre");
          expect(res.body.genre).toEqual("Comedy");

          expect(res.body).toHaveProperty("rating");
          expect(res.body.rating).toEqual(4);

          expect(res.body).toHaveProperty("explicit");
          expect(res.body.explicit).toBe(true);

          done();
        })
        .catch(() => done());
    });
  });
});
