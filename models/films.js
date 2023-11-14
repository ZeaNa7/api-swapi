import { Schema, model } from "mongoose";

const FilmsSchema = new Schema({
    "model": String,
    "pk": Number,
    "field": {
      "title": {
        type: String,
        "description": "The title of this film."
      },
      "episode_id": {
        type: Number,
        "description": "The episode number of this film."
      },
      "opening_crawl": {
        type: String,
        "description": "The opening crawl text at the beginning of this film."
      },
      "director": {
        type: String
      },
      "producer": {
        type: String
      },
      "release_date": {
        type: Date
      },
    }
})

export default model("Films", FilmsSchema);