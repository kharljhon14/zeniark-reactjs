const express = require("express");
const router = express.Router();

const questionRoute = require("../controllers/questions.controller");

router.get("/allquestions", questionRoute.getQuestions);

module.exports = router;
