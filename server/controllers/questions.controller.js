const data = require("../models/questions.model");

const questionsController = {
   getQuestions(req, res, next) {
      try {
         res.json(data);
      } catch (err) {
         res.send(err.message);
      }
   },
};


module.exports = questionsController;