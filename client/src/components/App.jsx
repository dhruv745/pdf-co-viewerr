import React from "react";
import PDFViewer from "./PDFViewer";

const App = () => {
  const sessionId = "default-session"; // Change to dynamic if needed
  const isAdmin = true; // Toggle for demonstration

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>PDF Co-Viewer</h1>
      <PDFViewer pdfUrl="sample.pdf" isAdmin={isAdmin} sessionId={sessionId} />
    </div>
  );
};

export default App;
