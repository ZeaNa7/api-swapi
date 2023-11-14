import { Router } from "express";
const router = Router();
import { getStarships, getStarshipById, createStarship, updateStarship, deleteStarship } from '../controllers/starships.js';


router.get("/", getStarships);
router.get("/:starshipid", getStarshipById);
router.post("/", createStarship);
router.put("/:starshipid", updateStarship);
router.delete("/:starshipid", deleteStarship);

export default router;