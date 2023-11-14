import { Router } from "express";
const router = Router();
import { getVehicles, getVehicleById, createVehicle, updateVehicle, deleteVehicle } from "../controllers/vehicles.js";


router.get("/", getVehicles);
router.get("/:vehicleid", getVehicleById);
router.post("/", createVehicle);
router.put("/:vehicleid", updateVehicle);
router.delete("/:vehicleid", deleteVehicle);

export default router;