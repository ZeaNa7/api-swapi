const mongoose = require( "mongoose");

const PlanetsSchema = new mongoose.Schema({
    "model": String,
    "pk": Number,
    "field": {
        "name": {
            type: String,
            "description": "The name of this planet."
          },
          "diameter": {
            type: String,
            "description": "The diameter of this planet in kilometers."
          },
          "rotation_period": {
            type: String,
            "description": "The number of standard hours it takes for this planet to complete a single rotation on its axis."
          },
          "orbital_period": {
            type: String,
            "description": "The number of standard days it takes for this planet to complete a single orbit of its local star."
          },
          "gravity": {
            type: String,
            "description": "A number denoting the gravity of this planet. Where 1 is normal."
          },
          "population": {
            type: String,
            "description": "The average populationof sentient beings inhabiting this planet."
          },
          "climate": {
            type: String,
            "description": "The climate of this planet. Comma-seperated if diverse."
          },
          "terrain": {
            type: String,
            "description": "the terrain of this planet. Comma-seperated if diverse."
          },
          "surface_water": {
            type: String,
            "description": "The percentage of the planet surface that is naturally occuring water or bodies of water."
          },
          "films": {
            type: Array,
            "description": "An array of Film URL Resources that this planet has appeared in."
          },
          "residents": {
            type: Array,
            "description": "An array of People URL Resources that live on this planet."
          },
          "url": {
            type: String,
            "description": "The hypermedia URL of this resource."
          },
          "created": {
            type: String,
            "description": "The ISO 8601 date format of the time that this resource was created."
          },
          "edited": {
            type: String,
            "description": "the ISO 8601 date format of the time that this resource was edited."
          }
        },
})

module.exports = mongoose.model("Planets", PlanetsSchema);