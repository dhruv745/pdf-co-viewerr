import React, { useEffect, useState } from "react";
import { Document, Page } from "react-pdf";
import useSocket from "../hooks/useSocket";

const PDFViewer = ({ pdfUrl, isAdmin, sessionId }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const socket = useSocket(sessionId);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await fetch(`/api/sessions/${sessionId}`);
        const data = await response.json();
        if (data.currentPage) setPageNumber(data.currentPage);
      } catch (error) {
        console.error("Error fetching session:", error);
      }
    };
    fetchSession();

    if (socket) {
      socket.on("pageUpdated", (page) => setPageNumber(page));
    }
  }, [socket, sessionId]);

  const changePage = (offset) => {
    const newPage = Math.min(Math.max(pageNumber + offset, 1), numPages);
    setPageNumber(newPage);

    if (isAdmin) {
      socket.emit("changePage", newPage);
    }
  };

  return (
    <div>
      <Document
        file={pdfUrl}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => changePage(-1)} disabled={pageNumber <= 1}>
          Previous
        </button>
        <span>
          {" "}
          Page {pageNumber} of {numPages}{" "}
        </span>
        <button onClick={() => changePage(1)} disabled={pageNumber >= numPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PDFViewer;
