import { Router } from "express";
const router = Router();
import verifyToken from "../middleware/authentification.js";
import { getStarships, getStarshipById, createStarship, updateStarship, deleteStarship } from '../controllers/starships.js';


router.get("/", verifyToken, getStarships);
router.get("/:starshipid", verifyToken, getStarshipById);
router.post("/", verifyToken, createStarship);
router.put("/:starshipid", verifyToken, updateStarship);
router.delete("/:starshipid", verifyToken, deleteStarship);

export default router;