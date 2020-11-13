const { it } = require("@jest/globals")
const supertest = require("supertest")
const { describe } = require("yargs")
const  server = require("../api/server")
const { intersect } = require("../database/dbConfig")
const db = require("../database/dbConfig")

describe("recipe intergration", () =>{
    it("can get a list of recipies", async () => {

    })

    it("creates a new recipe", async () => {
        
    })
    
})