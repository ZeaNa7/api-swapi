import { Router } from 'express'
const router = Router()
import verifyToken from '../middleware/authentification.js'
import {
    getVehicles,
    getVehicleById,
    createVehicle,
    updateVehicle,
    deleteVehicle,
} from '../controllers/vehicles.js'

router.get('/', verifyToken, getVehicles)
router.get('/:vehicleid', verifyToken, getVehicleById)
router.post('/', verifyToken, createVehicle)
router.put('/:vehicleid', verifyToken, updateVehicle)
router.delete('/:vehicleid', verifyToken, deleteVehicle)

export default router
