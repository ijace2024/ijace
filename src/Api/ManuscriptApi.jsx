import axios from "axios";

// https://api.ijmsabc.org/api/ijmsabc/pdfs

const API_BASE = "";

export const createManuscript = async (formData) =>
  await axios.post(API_BASE, formData, { headers: { "Content-Type": "multipart/form-data" } });

export const getAllManuscripts = async () => await axios.get(API_BASE);
export const getManuscriptById = async (id) => await axios.get(`${API_BASE}/${id}`);
export const updateManuscript = async (id, manuscript) => await axios.put(`${API_BASE}/${id}`, manuscript);
export const deleteManuscript = async (id) => await axios.delete(`${API_BASE}/${id}`);

