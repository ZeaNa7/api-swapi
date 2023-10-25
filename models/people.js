const mongoose = require( "mongoose");

const PeopleSchema = new mongoose.Schema({
    "model": String,
    "pk": Number,
    "field": {
          "name": {
            type: String,
            "description": "The name of this person."
          },
          "height": {
            type: String,
            "description": "The height of this person in meters."
          },
          "mass": {
            type: String,
            "description": "The mass of this person in kilograms."
          },
          "hair_color": {
            type: String,
            "description": "The hair color of this person."
          },
          "skin_color": {
            type: String,
            "description": "The skin color of this person."
          },
          "eye_color": {
            type: String,
            "description": "The eye color of this person."
          },
          "birth_year": {
            type: String,
            "description": "The birth year of this person. BBY (Before the Battle of Yavin) or ABY (After the Battle of Yavin)."
          },
          "gender": {
            type: String,
            "description": "The gender of this person (if known)."
          },
          "homeworld": {
            type: String,
            "description": "The url of the planet resource that this person was born on."
          },
          "films": {
            type: Array,
            "description": "An array of urls of film resources that this person has been in."
          },
          "species": {
            type: Array,
            "description": "The url of the species resource that this person is."
          },
          "vehicles": {
            type: Array,
            "description": "An array of vehicle resources that this person has piloted"
          },
          "starships": {
            type: Array,
            "description": "An array of starship resources that this person has piloted"
          },
          "url": {
            type: String,
            "description": "The url of this resource"
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

module.exports = mongoose.model("People", PeopleSchema);