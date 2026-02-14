import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

import { Document, Page, pdfjs } from "react-pdf";
import React, { useState } from "react";

// ✅ WORKER FIX FOR VITE + REACT 19
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const PdfViewer = ({ pdfUrl, closeViewer }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  // ✅ When PDF loads successfully
  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
    setPageNumber(1);
  };

  return (
    // ✅ FULL SCREEN VIEWER
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f1f3f5",
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* ✅ HEADER BAR */}
      <div
        style={{
          height: "60px",
          background: "#212529",
          color: "white",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 20px",
        }}
      >
        <h5 style={{ margin: 0 }}>📄 PDF Viewer</h5>

        <button onClick={closeViewer} className="btn btn-sm btn-danger">
          ❌ Close
        </button>
      </div>

      {/* ✅ PDF DISPLAY FULL AREA */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "30px",
        }}
      >
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <Page
            pageNumber={pageNumber}
            scale={1.5}
            renderTextLayer={true}
            renderAnnotationLayer={true}
          />
        </Document>
      </div>

      {/* ✅ FOOTER NAVIGATION */}
      {numPages && (
        <div
          style={{
            height: "70px",
            background: "#212529",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          {/* Prev */}
          <button
            className="btn btn-outline-light"
            disabled={pageNumber <= 1}
            onClick={() => setPageNumber(pageNumber - 1)}
          >
            ⬅ Prev
          </button>

          {/* Page Info */}
          <span style={{ fontWeight: "bold", fontSize: "16px" }}>
            Page {pageNumber} / {numPages}
          </span>

          {/* Next */}
          <button
            className="btn btn-outline-light"
            disabled={pageNumber >= numPages}
            onClick={() => setPageNumber(pageNumber + 1)}
          >
            Next ➡
          </button>
        </div>
      )}
    </div>
  );
};

export default PdfViewer;


// implemented a full screen PDF viewer with a header and footer. The header contains the title and a close button, while the footer has navigation buttons to move between pages. The PDF is displayed in the center with a light background for better readability.