import { Router } from "express";
const router = Router();
import { getPlanets, createPlanet, getPlanetById, updatePlanet, deletePlanet } from '../controllers/planets.js';

router.get("/", getPlanets);
router.get("/:planetid", getPlanetById);
router.post("/", createPlanet);
router.put("/:planetid", updatePlanet);
router.delete("/:planetid", deletePlanet);

export default router;

