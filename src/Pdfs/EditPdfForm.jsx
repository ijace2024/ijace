import "./EditPdfForm.css";

import { Alert, Button, Form, Modal } from "react-bootstrap";
import React, { useState } from "react";

import PdfApi from "./AdminDashBoard/PdfApi";

const EditPdfForm = ({
  editId,
  editForm,
  setEditForm,
  setEditId,
  fetchPdfs,
}) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [msg, setMsg] = useState("");

  // ✅ Handle Text Field Change
  const handleEditChange = (e) => {
    setEditForm({
      ...editForm,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle File Change
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  // ✅ Update PDF Function
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      // ✅ Append Metadata Fields
      formData.append("title", editForm.title);
      formData.append("volume", editForm.volume);
      formData.append("issue_no", editForm.issueNo);
      formData.append("pub_year", editForm.pubYear);
      formData.append("issue_type", editForm.issueType);
      formData.append("author", editForm.author);
      formData.append("doi", editForm.doi);
      formData.append("source", editForm.source);

      // ✅ Append File ONLY if Selected
      if (selectedFile) {
        formData.append("pdf_doc", selectedFile);
      }

      // ✅ Call Backend Update API
      await PdfApi.put(`/update/${editId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setMsg("✅ PDF Updated Successfully!");

      // ✅ Refresh List
      fetchPdfs();

      // ✅ Close Modal After 1 Second
      setTimeout(() => {
        setEditId(null);
        setMsg("");
      }, 1000);
    } catch (err) {
      console.error("Update Error:", err);
      setMsg("❌ Update Failed!");
    }
  };

  return (
    <Modal show={true} onHide={() => setEditId(null)} centered>
      <Modal.Header closeButton>
        <Modal.Title>✏ Edit PDF Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        {msg && <Alert variant="info">{msg}</Alert>}

        <Form onSubmit={handleUpdate}>
          {/* Title */}
          <Form.Group className="mb-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              name="title"
              value={editForm.title}
              onChange={handleEditChange}
              required
            />
          </Form.Group>

          {/* Author */}
          <Form.Group className="mb-2">
            <Form.Label>Author</Form.Label>
            <Form.Control
              type="text"
              name="author"
              value={editForm.author}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Volume */}
          <Form.Group className="mb-2">
            <Form.Label>Volume</Form.Label>
            <Form.Control
              type="text"
              name="volume"
              value={editForm.volume}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Issue No */}
          <Form.Group className="mb-2">
            <Form.Label>Issue Number</Form.Label>
            <Form.Control
              type="text"
              name="issueNo"
              value={editForm.issueNo}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Publication Year */}
          <Form.Group className="mb-2">
            <Form.Label>Publication Year</Form.Label>
            <Form.Control
              type="text"
              name="pubYear"
              value={editForm.pubYear}
              onChange={handleEditChange}
            />
          </Form.Group>

          {/* Issue Type */}
          <Form.Group className="mb-2">
            <Form.Label>Issue Type</Form.Label>
            <Form.Select
              name="issueType"
              value={editForm.issueType}
              onChange={handleEditChange}
            >
              <option value="Current_Issue">Current Issue</option>
              <option value="Previous_Issue">Previous Issue</option>
            </Form.Select>
          </Form.Group>

          {/* Replace PDF File */}
          <Form.Group className="mb-3">
            <Form.Label>Replace PDF File (Optional)</Form.Label>
            <Form.Control type="file" accept=".pdf" onChange={handleFileChange} />
          </Form.Group>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <Button variant="secondary" onClick={() => setEditId(null)}>
              Cancel
            </Button>

            <Button type="submit" variant="primary">
              ✅ Update PDF
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditPdfForm;
