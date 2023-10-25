const express = require("express");
const router = express.Router();
const { getSpecies, getSpeciesById, createSpecies, updateSpecies, deleteSpecies } = require("../controllers/species");

router.get("/", getSpecies);
router.get("/:speciesid", getSpeciesById);
router.post("/", createSpecies);
router.put("/:speciesid", updateSpecies);
router.delete("/:speciesid", deleteSpecies);

module.exports = router;

