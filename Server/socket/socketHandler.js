const Session = require("../models/session");

module.exports = (io) => {
  io.on("connection", async (socket) => {
    const sessionId = "default-session";

    // Find the session or create a new one
    let session = await Session.findOne({ sessionId });
    if (!session) {
      session = await Session.create({ sessionId, adminId: socket.id });
    }

    // Send the current page to the connected user
    socket.emit("pageUpdated", session.currentPage);

    // Listen for page changes from the admin
    socket.on("changePage", async (page) => {
      if (socket.id === session.adminId) {
        session.currentPage = page;
        await session.save();
        io.emit("pageUpdated", page); // Broadcast to all clients
      }
    });

    // Handle disconnection
    socket.on("disconnect", () => {
      if (socket.id === session.adminId) {
        session.adminId = null; // Reset admin on disconnect
      }
    });
  });
};
