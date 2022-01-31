const express = require("express");
const router = express.Router();

const movieRouter = require("./movie");
const crewMemberRouter = require("./crewMember");

router.use("", movieRouter);
router.use("/crewMember", crewMemberRouter);

module.exports = router;
