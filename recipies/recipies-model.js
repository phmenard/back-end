const db = require("../database/dbConfig")

function find() {
	return db("recipe as r")
		.innerJoin("users as u", "u.id", "r.sourceId")
		.select("r.id", "r.title", "u.username")

	//console.log(recipe)	
}

function findIngredients(id){
	return db("ingredients")
		.where("recipeId", id)
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
	findIngredients,
}