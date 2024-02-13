import { Router } from 'express'
const router = Router()
import verifyToken from '../middleware/authentification.js'
import {
    getSpecies,
    getSpeciesById,
    createSpecies,
    updateSpecies,
    deleteSpecies,
} from '../controllers/species.js'

router.get('/', verifyToken, getSpecies)
router.get('/:speciesid', verifyToken, getSpeciesById)
router.post('/', verifyToken, createSpecies)
router.put('/:speciesid', verifyToken, updateSpecies)
router.delete('/:speciesid', verifyToken, deleteSpecies)

export default router
