const db = require("../database/dbConfig")

function find() {
	return db("recipies")
}

function findById(id) {
	return db("recipies").where({ id }).first()
}

function findByRecipiname(recipiename) {
	return db("recipies as r")
		.where("r.recipiename", recipiename)
		.first("r.id", "r.recipiename")
}

async function create(data) {
	const [id] = await db("recipies").insert(data)
	return findById(id)
}

async function update(id, data) {
	await db("recipies").where({ id }).update(data)
	return findById(id)
}

function remove(id) {
	return db("recipies").where({ id }).del()
}

module.exports = {
	find,
    findById,
    findByRecipiname,
	create,
	update,
	remove,
}