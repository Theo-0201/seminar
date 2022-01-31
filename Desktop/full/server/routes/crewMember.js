const express = require("express");
const router = express.Router();
const CrewMemberController = require("./../controllers").crewMember;

router.get("/CrewMembers", CrewMemberController.getAllcrewMember);
router.post("/postCrewMember", CrewMemberController.postCrewMember);
router.put("/putCrewMember", CrewMemberController.putCrewMember);
router.delete(
  "/deleteCrewMember/:CrewMemberId",
  CrewMemberController.deleteCrewMemberWithId
);

module.exports = router;
