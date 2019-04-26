const mongoose = require("mongoose")
const Schema = mongoose.Schema

const mealSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        validate: [arrayLimit, "too many ingredients"]
    },
    color: {
        type: String
    },

    calories: {
        type: Number
    }
})

function arrayLimit(val) {
    return val.length <= 10
}

const Meal = mongoose.model("Meal", mealSchema)
module.exports = Meal
