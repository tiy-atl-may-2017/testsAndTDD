const assert = require('assert');
const mongoose = require('mongoose');
const config = require("../config")[process.env.NODE_ENV || 'test'];
const Recipe = require("../models/recipe");

// runs before all tests in this block
// before("connect to Mongo", function (done) {
//   mongoose.connect(config.mongoURL).then(done);
// });

// runs after all tests in this block
after("drop database", function (done) {
  mongoose.connection.dropDatabase(done);
})

describe("Recipe", function () {
  // runs before each test in this block
    beforeEach("delete all recipes", function (done) {
        Recipe.deleteMany({}).then(() => done()).catch(done);
    });

    it("can be created", function (done) {
        Recipe.create({name: "Pancakes"}, function (err, recipe) {
            if (err) {
                done(err)
            } else {
                assert(recipe.id);
                assert(recipe.name == "Pancakes");
                done();
            }
        });
    });
})
