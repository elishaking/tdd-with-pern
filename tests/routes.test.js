process.env.NODE_ENV = "test";

const server = require("../app");
const request = require("supertest");

describe("API Routes", () => {
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
          expect(res.body[0].name).toHaveProperty("Suits");

          expect(res.body[0]).toHaveProperty("channel");
          expect(res.body[0].channel).toHaveProperty("USA Network");

          expect(res.body[0]).toHaveProperty("genre");
          expect(res.body[0].genre).toHaveProperty("Drama");

          expect(res.body[0]).toHaveProperty("rating");
          expect(res.body[0].rating).toEqual(3);

          expect(res.body[0]).toHaveProperty("explicit");
          expect(res.body[0].explicit).toBe(false);

          done();
        })
        .catch(err => {
          done(err);
        });
    });
  });
});
