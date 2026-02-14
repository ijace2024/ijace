import { Alert, Button, Card, Container, Form } from "react-bootstrap";
import React, { useState } from "react";

import Api from "./PdfApi";

export default function UploadPdf() {
  const [title, setTitle] = useState("");
  const [volume, setVolume] = useState("");
  const [issueNo, setIssueNo] = useState("");
  const [pubYear, setPubYear] = useState("");
  const [issueType, setIssueType] = useState("");
  const [author, setAuthor] = useState("");
  const [pdfFile, setPdfFile] = useState(null);

  const [msg, setMsg] = useState("");

  const uploadPdf = async (e) => {
    e.preventDefault();

    if (!pdfFile) {
      setMsg("❌ Please select PDF file");
      return;
    }

    const formData = new FormData();

    formData.append("title", title);
    formData.append("volume", volume);
    formData.append("issue_no", issueNo);
    formData.append("pub_year", pubYear);
    formData.append("issue_type", issueType);
    formData.append("author", author);

    formData.append("doi", "ijace");
    formData.append("source", "ijace");

    formData.append("pdf_doc", pdfFile);

    try {
      await Api.post("/upload", formData);
      setMsg("✅ Uploaded Successfully!");
    } catch (err) {
      setMsg("❌ Upload Failed: " + err.response?.data);
    }
  };

  return (
    <Container className="mt-5">
      <Card className="p-4 shadow">
        <h3>Upload PDF</h3>

        {msg && <Alert>{msg}</Alert>}

        <Form onSubmit={uploadPdf}>
          <Form.Control
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-2"
          />

          <Form.Control
            placeholder="Volume"
            value={volume}
            onChange={(e) => setVolume(e.target.value)}
            className="mb-2"
          />

          <Form.Control
            placeholder="Issue No"
            value={issueNo}
            onChange={(e) => setIssueNo(e.target.value)}
            className="mb-2"
          />

          <Form.Control
            placeholder="Publication Year"
            value={pubYear}
            onChange={(e) => setPubYear(e.target.value)}
            className="mb-2"
          />

          <Form.Select
            value={issueType}
            onChange={(e) => setIssueType(e.target.value)}
            className="mb-2"
          >
            <option value="">Select Issue Type</option>
            <option value="Current_Issue">Current Issue</option>
            <option value="Previous_Issue">Previous Issue</option>
          </Form.Select>

           <Form.Control
            placeholder="Author Name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="mb-2"
          />

          <Form.Control
            type="file"
            accept=".pdf"
            onChange={(e) => setPdfFile(e.target.files[0])}
            className="mb-3"
          />

          <Button type="submit">Upload</Button>
        </Form>
      </Card>
    </Container>
  );
}
// export default UploadPdf;
