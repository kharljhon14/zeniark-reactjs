const fs = require("fs");

const questionData = fs.readFileSync("data/questions.json");

const data = JSON.parse(questionData);

module.exports = data;
