const express = require("express");
const router = express.Router();
const queries = require("../db/queries");

// *** GET all shows *** //
router.get("/shows", (req, res, next) => {
  queries
    .getAll()
    .then(shows => {
      res.status(200).json(shows);
    })
    .catch(error => {
      next(error);
    });
});

// *** GET single show *** //
router.get("/shows/:id", (req, res, next) => {
  queries
    .getSingle(req.params.id)
    .then(show => {
      res.status(200).json(show);
    })
    .catch(error => {
      next(error);
    });
});

// *** add show *** //
router.post("/shows", (req, res, next) => {
  queries
    .add(req.body)
    .then(showID => {
      return queries.getSingle(showID[0]);
    })
    .then(show => {
      res.status(200).json(show);
    })
    .catch(error => {
      next(error);
    });
});

// *** update show *** //
router.put("/shows/:id", (req, res, next) => {
  if (req.body.hasOwnProperty("id")) {
    return res.status(422).json({
      error: "You cannot update the id field"
    });
  }

  queries
    .update(req.params.id, req.body)
    .then(() => {
      return queries.getSingle(req.params.id);
    })
    .then(show => {
      res.status(200).json(show);
    })
    .catch(error => {
      next(error);
    });
});

// *** delete show *** //
router.delete("/shows/:id", (req, res, next) => {
  queries
    .getSingle(req.params.id)
    .then(show => {
      queries
        .deleteItem(req.params.id)
        .then(() => {
          res.status(200).json(show);
        })
        .catch(error => {
          next(error);
        });
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
