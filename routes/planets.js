const express = require("express");
const router = express.Router();
const { getPlanets, createPlanet, getPlanetById, updatePlanet, deletePlanet} = require('../controllers/planets');

router.get("/", getPlanets);
router.get("/:planetid", getPlanetById);
router.post("/", createPlanet);
router.put("/:planetid", updatePlanet);
router.delete("/:planetid", deletePlanet);

module.exports = router;

