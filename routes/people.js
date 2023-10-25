const express = require("express");
const router = express.Router();
const { listAllPeople } = require('../controllers/people');

router.get("/peoples", listAllPeople);

module.exports = router;

