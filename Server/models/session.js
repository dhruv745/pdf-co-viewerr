const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  sessionId: { type: String, required: true, unique: true },
  currentPage: { type: Number, default: 1 },
  adminId: { type: String },
});

module.exports = mongoose.model("Session", sessionSchema);
