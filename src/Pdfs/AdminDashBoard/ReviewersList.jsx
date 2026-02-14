import { Button, Container, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Api from "../Api";

const ReviewersList = () => {
  const [reviewers, setReviewers] = useState([]);

  // Fetch all reviewers
  const fetchReviewers = async () => {
    try {
      const response = await Api.get("/reviews");

      // ✅ Filter only reviewers with source = "ijace"
      const filteredReviewers = response.data.filter(
        (r) => r.source === "ijace"
      );

      setReviewers(filteredReviewers);
    } catch (error) {
      console.error(
        "Error fetching reviewers:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to fetch reviewers ❌");
    }
  };

  useEffect(() => {
    fetchReviewers();
  }, []);

  // Delete a reviewer
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this reviewer?")) return;

    try {
      await Api.delete(`/reviews/${id}`);
      alert("Reviewer deleted successfully ✅");

      // Remove deleted reviewer from state
      setReviewers((prev) => prev.filter((r) => r.id !== id));
    } catch (error) {
      console.error(
        "Error deleting reviewer:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to delete reviewer ❌");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Reviewers List </h1>

      {reviewers.length === 0 ? (
        <p className="text-center text-muted">
          No reviewers found for source = ijace.
        </p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Address</th>
              <th>Source</th>
              <th>CV</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reviewers.map((reviewer) => (
              <tr key={reviewer.id}>
                <td>{reviewer.id}</td>
                <td>{reviewer.name}</td>
                <td>{reviewer.designation}</td>
                <td>{reviewer.email}</td>
                <td>{reviewer.address}</td>

                {/* ✅ Show source */}
                <td>{reviewer.source}</td>

                <td>
                  {reviewer.cv ? (
                    <a
                      href={`data:application/pdf;base64,${reviewer.cv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View CV
                    </a>
                  ) : (
                    "N/A"
                  )}
                </td>

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(reviewer.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default ReviewersList;
