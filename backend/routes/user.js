const express = require("express");
const UserController = require("../controllers/user");

const router = express.Router();

router.post("/login", UserController.loginUser);
router.post("/bcrypt_it", UserController.bcrypt_it);
router.get("/is_logged_in", UserController.is_logged_in);
router.get("/logout", UserController.logoutUser);
router.post("/compare_password", UserController.compare_password);

module.exports = router;
