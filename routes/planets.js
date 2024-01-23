import { Router } from "express";
const router = Router();
import verifyToken from "../middleware/authentification.js";
import { getPlanets, createPlanet, getPlanetById, updatePlanet, deletePlanet } from '../controllers/planets.js';

router.get("/",verifyToken, getPlanets);
router.get("/:planetid",verifyToken, getPlanetById);
router.post("/",verifyToken, createPlanet);
router.put("/:planetid",verifyToken, updatePlanet);
router.delete("/:planetid",verifyToken, deletePlanet);

export default router;

