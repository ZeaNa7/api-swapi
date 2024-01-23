import express from "express";
import {
  listAllFilms,
  getFilmById,
  updateFilm,
  deleteFilm,
  createNewFilm,
} from "../controllers/films.js";

const router = express.Router();

router.get("/", listAllFilms);
router.post("/", createNewFilm);
router.get("/:filmid", getFilmById);
router.put("/:filmid", updateFilm);
router.delete("/:filmid", deleteFilm);

export default router;
