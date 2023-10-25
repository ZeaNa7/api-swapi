const { listAllFilms, createNewFilm, getFilm, updateFilm, deleteFilm } = require('../controllers/films');
const express = require("express");
const router = express.Router();

router.get("/", listAllFilms);
router.post("/", createNewFilm);
router.get("/:filmid", getFilm);
router.put("/:filmid", updateFilm);
router.delete("/:filmid", deleteFilm);

module.exports = router;
