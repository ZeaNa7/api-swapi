const { listAllFilms, createNewFilm, getFilm, updateFilm, deleteFilm } = require('../controllers/films');
const express = require("express");
const router = express.Router();

router.get("/films", listAllFilms);
router.post("/films", createNewFilm);
router.get("/films/:filmid", getFilm);
router.put("/films/:filmid", updateFilm);
router.delete("/films/:filmid", deleteFilm);

module.exports = router;
