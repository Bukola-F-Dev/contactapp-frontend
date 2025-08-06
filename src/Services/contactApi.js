import axios from "axios";

const BASE_URL = "http://localhost:5000/api/contacts";

export const getAllContacts = () => axios.get(BASE_URL);
export const getContactById = (id) => axios.get(`${BASE_URL}/${id}`);
export const createContact = (data) => axios.post(BASE_URL, data);
export const updateContact = (id, data) => axios.put(`${BASE_URL}/${id}`, data);
export const deleteContact = (id) => axios.delete(`${BASE_URL}/${id}`);
export const searchContacts = (query) =>
  axios.get(`${BASE_URL}/search?${query}`); 