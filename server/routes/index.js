const express = require("express");
const router = express.Router();

const questionRoute = require("./questions.route");

const routesIndex = [{ path: "/questions", route: questionRoute }];

routesIndex.forEach((route) => {
   router.use(route.path, route.route);
});

module.exports = router;
