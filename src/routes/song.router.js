const { getAll, create, getOne, destroy, update } = require('../controllers/song.controller');
const express = require('express');

const songRouter = express.Router();

songRouter.route("/")
		.get(getAll)
        .post(create)

songRouter.route("/:id")
        .get(getOne)
        .delete(destroy)
        .put(update)


module.exports = songRouter;