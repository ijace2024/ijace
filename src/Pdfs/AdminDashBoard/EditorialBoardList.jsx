import { Button, Container, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Api from "../Api";

const EditorialboardList = () => {
  const [members, setMembers] = useState([]);

  // Fetch all editorial board members
  const fetchMembers = async () => {
    try {
      const response = await Api.get("/editorialboardupload");

      // ✅ Filter only members with source = "ijmsabc"
      const filteredMembers = response.data.filter(
        (member) => member.source === "ijace"
      );

      setMembers(filteredMembers);
    } catch (error) {
      console.error(
        "Error fetching editorial board members:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to fetch editorial board list ❌");
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  // Delete a member
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this member?")) return;

    try {
      await Api.delete(`/editorialboardupload/${id}`);
      alert("Member deleted successfully ✅");

      // Remove deleted member from state
      setMembers((prev) => prev.filter((m) => m.id !== id));
    } catch (error) {
      console.error(
        "Error deleting member:",
        error.response ? error.response.data : error.message
      );
      alert("Failed to delete member ❌");
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">
        Editorial Board Members 
      </h1>

      {members.length === 0 ? (
        <p className="text-center text-muted">
          No members found for source = ijmsabc.
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
            {members.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.designation}</td>
                <td>{member.email}</td>
                <td>{member.address}</td>

                {/* ✅ Show source */}
                <td>{member.source}</td>

                <td>
                  {member.cv ? (
                    <a
                      href={`data:application/pdf;base64,${member.cv}`}
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
                    onClick={() => handleDelete(member.id)}
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

export default EditorialboardList;
