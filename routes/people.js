const express = require("express");
const router = express.Router();
const { getPeople, createPeople, getPeopleById, updatePeople, deletePeople} = require('../controllers/people');

router.get("/", getPeople);
router.get("/:peopleid", getPeopleById);
router.post("/", createPeople);
router.put("/:peopleid", updatePeople);
router.delete("/:peopleid", deletePeople);

module.exports = router;

