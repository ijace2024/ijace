import { Button, Container, Table } from "react-bootstrap";
import React, { useEffect, useState } from "react";

import Api from "../Api";

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  // Fetch all contacts
  const fetchContacts = async () => {
    try {
      const response = await Api.get("/contact");

      // ✅ Filter only contacts with source = "ijmsabc"
      const filteredContacts = response.data.filter(
        (c) => c.source === "ijace"
      );

      setContacts(filteredContacts);
    } catch (error) {
      console.error("Failed to fetch contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  // Delete a contact
  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      try {
        await Api.delete(`/contact/${id}`);

        // Remove deleted contact from state
        setContacts((prev) => prev.filter((c) => c.id !== id));
      } catch (error) {
        console.error("Failed to delete contact:", error);
      }
    }
  };

  return (
    <Container className="mt-5">
      <h3 className="text-center mb-4">
        All Contact Submissions 
      </h3>

      {contacts.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              {/* <th>ID</th> */}
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Message</th>
              {/* <th>Source</th> */}
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {contacts.map((c) => (
              <tr key={c.id}>
                {/* <td>{c.id}</td> */}
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>{c.phone}</td>
                <td>{c.address}</td>
                <td>{c.message}</td>

                {/* ✅ Show source */}
                {/* <td>{c.source}</td> */}

                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(c.id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        <p className="text-center text-muted">
          No contact submissions found for ijace.
        </p>
      )}
    </Container>
  );
};

export default ContactList;
