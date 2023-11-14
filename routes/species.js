import { Router } from "express";
const router = Router();
import { getSpecies, getSpeciesById, createSpecies, updateSpecies, deleteSpecies } from "../controllers/species.js";

router.get("/", getSpecies);
router.get("/:speciesid", getSpeciesById);
router.post("/", createSpecies);
router.put("/:speciesid", updateSpecies);
router.delete("/:speciesid", deleteSpecies);

export default router;

