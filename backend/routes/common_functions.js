const express = require("express");
const common_functionsController = require("../controllers/common_functions");

const router = express.Router();

router.get("/get_default_db", common_functionsController.get_default_db);

module.exports = router;
