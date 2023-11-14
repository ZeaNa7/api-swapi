import express from "express";
import {
  listAllFilms,
  createFilm,
  getFilmById,
  updateFilm,
  deleteFilm,
} from "../controllers/films.js";

const router = express.Router();

router.get("/", listAllFilms);
router.post("/", createFilm);
router.get("/:filmid", getFilmById);
router.put("/:filmid", updateFilm);
router.delete("/:filmid", deleteFilm);

export default router;
