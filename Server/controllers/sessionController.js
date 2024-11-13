const Session = require("../models/session");

// Initialize a new session
async function createSession(req, res) {
  const { sessionId, adminId } = req.body;
  try {
    const session = new Session({ sessionId, adminId });
    await session.save();
    res.status(201).json(session);
  } catch (error) {
    res.status(500).json({ error: "Failed to create session" });
  }
}

// Update the current page of a session
async function updatePage(req, res) {
  const { sessionId, pageNumber } = req.body;
  try {
    const session = await Session.findOneAndUpdate(
      { sessionId },
      { currentPage: pageNumber },
      { new: true }
    );
    res.json(session);
  } catch (error) {
    res.status(500).json({ error: "Failed to update page" });
  }
}

// Get session by sessionId
async function getSession(req, res) {
  const { sessionId } = req.params;
  try {
    const session = await Session.findOne({ sessionId });
    if (session) {
      res.json(session);
    } else {
      res.status(404).json({ error: "Session not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch session" });
  }
}

module.exports = { createSession, updatePage, getSession };
