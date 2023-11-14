import { Router } from "express";
const router = Router();
import { getPeople, createPeople, getPeopleById, updatePeople, deletePeople } from '../controllers/people.js';

router.get("/", getPeople);
router.get("/:peopleid", getPeopleById);
router.post("/", createPeople);
router.put("/:peopleid", updatePeople);
router.delete("/:peopleid", deletePeople);

export default router;

