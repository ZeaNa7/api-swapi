import express from 'express'
import {
    listAllFilms,
    getFilmById,
    updateFilm,
    deleteFilm,
    createFilm,
} from '../controllers/films.js'
import verifyToken from '../middleware/authentification.js'

const router = express.Router()

router.get('/', verifyToken, listAllFilms)
router.post('/', verifyToken, createFilm)
router.get('/:filmid', verifyToken, getFilmById)
router.put('/:filmid', verifyToken, updateFilm)
router.delete('/:filmid', verifyToken, deleteFilm)

export default router
