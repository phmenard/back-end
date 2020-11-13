const axios = require('axios');

const router = require('express').Router();
const Recipies = require("./recipies-model");

//const { restrict } = require("../auth/authenticate-middleware")

router.get("/", async (req, res, next) => {
	try {
		res.json(await Recipies.getAll())
	} catch(err) {
		next(err)
	}
})

module.exports = router;
