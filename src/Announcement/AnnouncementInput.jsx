import React, { useState } from "react";

import Api from "../Pdfs/Api";

// import Api from "../Api"; // ✅ Import Api

const AnnouncementInput = () => {
  const [announcement, setAnnouncement] = useState({
    id1: "",
    information: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setAnnouncement({ ...announcement, [e.target.name]: e.target.value });
  };

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        id: Number(announcement.id1),
        information: announcement.information,
      };
      console.log("Payload Sent:", payload);

      // ✅ Call backend correctly
      await Api.post("/announcement", payload);

      alert("Announcement submitted successfully!");
      setAnnouncement({ id1: "", information: "" }); // Reset form
    } catch (error) {
      console.error("Error submitting announcement:", error);
      alert("Failed to submit announcement.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
        <h1 className="text-2xl font-bold text-center text-blue-600 mb-4">
          📢 ANNOUNCEMENT
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label
              htmlFor="id1"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Enter ID:
            </label>
            <input
              type="number"
              id="id1"
              name="id1"
              value={announcement.id1}
              onChange={handleChange}
              required
              className="p-3 border border-gray-300 rounded-md"
              placeholder="Enter the ID"
            />
          </div>

          <div className="flex flex-col">
            <label
              htmlFor="anno"
              className="text-sm font-medium text-gray-700 mb-1"
            >
              Announcement:
            </label>
            <textarea
              id="anno"
              name="information"
              placeholder="Enter the announcement"
              value={announcement.information}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md resize-none h-28"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default AnnouncementInput;
