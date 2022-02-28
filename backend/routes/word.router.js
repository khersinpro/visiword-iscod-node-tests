const express = require("express");
const router = express.Router();

const wordCtrl = require("../controllers/word.controller");

router.get("/", wordCtrl.todayWord);

module.exports = router;
