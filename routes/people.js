import { Router } from 'express'
const router = Router()
import verifyToken from '../middleware/authentification.js'
import {
    getPeople,
    createPeople,
    getPeopleById,
    updatePeople,
    deletePeople,
} from '../controllers/people.js'

router.get('/', verifyToken, getPeople)
router.get('/:peopleid', verifyToken, getPeopleById)
router.post('/', verifyToken, createPeople)
router.put('/:peopleid', verifyToken, updatePeople)
router.delete('/:peopleid', verifyToken, deletePeople)

export default router
