const express = require("express");
const router = express.Router();
const {
  createSession,
  updatePage,
  getSession,
} = require("../controllers/sessionController");

router.post("/create", createSession);
router.put("/update", updatePage);
router.get("/:sessionId", getSession);

module.exports = router;
