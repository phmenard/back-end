const db = require("../database/dbConfig")

async function getAll() {
	const recipies = await db("recipe as r")
		.innerJoin("users as u", "u.id", "r.sourceId")
		.select("r.id", "r.title", "u.username as source", "r.instructions")
		
	
	recipies.forEach(async recipe =>  {
		const ingredients = await findIngredients(recipe.id)
		recipe['ingredients'] = ingredients
		//console.log(recipe)
	});

	recipies.forEach(async recipe =>  {
		const categories = await findIngredients(recipe.id)
		recipe['categories'] = categories

		console.log(recipe)
	});

	

	
	/*const ingredients = await db('ingredients as i')
		//.join('ingredients', 'ingredients.recipeId', 'r.id')
		.select("i.description")
		.where('i.recipeId', recipies.id)*/

	/*const categories = await db('category as c')
		//.join('ingredients', 'ingredients.recipeId', 'r.id')
		.select("c.name")
		.where('c.recipeId', recipies.id)*/

	
	//recipies['ingredients'] = ingredients;

	//recipies['ingredients'] = ingredients;


	return recipies;
}

async function findIngredients(id) {
	return await db("ingredients")
		.where("recipeId", id)
}

async function findCategories(id) {
	return await db("ingredients")
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
	getAll,
	findById,
	findByRecipiname,
	create,
	update,
	remove,
	findIngredients,
	findCategories
}