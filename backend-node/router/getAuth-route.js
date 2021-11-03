const express = require("express");
const userAuthControllers = require("../controllers/user/user-controller");
const router = express.Router();
const app = express();

/**
 * /api/register: register route
 * @param /api/register: API routes for POST register
 * @param userAuthControllers this is auth controllers.
 */
router.post("/api/register", userAuthControllers.register);

/**
 * /api/login: login route
 * @param /api/login: API routes for POST login
 * @param userAuthControllers this is auth controllers.
 */
router.post("/api/login", userAuthControllers.login);

module.exports = router;
