import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://contactapp-backend-mnj6.onrender.com/api/contacts";

const ContactEdit = () => {
  const { id } = useParams(); // get contact ID from URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const [message, setMessage] = useState({ type: "", text: "" });

  // Fetch contact by ID
  useEffect(() => {
    const fetchContact = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/${id}`);
        setFormData(res.data);
      } catch (err) {
        setMessage({
          type: "error",
          text:
            err.response?.data?.message || "Failed to load contact details.",
        });
      }
    };

    fetchContact();
  }, [id]);

  // Handles form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      await axios.put(`${BASE_URL}/${id}`, formData);
      setMessage({ type: "success", text: "Contact updated successfully!" });
 
      setTimeout(() => {
        navigate("/");  
      }, 1500);
    } catch (err) {
      setMessage({
        type: "error",
        text:
          err.response?.data?.message || "Failed to update contact. Try again.",
      });
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-6 bg-white rounded-lg">
<h2 className="text-3xl text-blue-800 font-bold mb-6">Edit Contact</h2>

{message.text && (
  <div
    className={`mb-4 p-2 rounded ${
      message.type === "success"
        ? "bg-green-100 text-green-700"
        : "bg-red-100 text-red-700"
    }`}
  >
    {message.text}
  </div>
)}

      <form onSubmit={handleSubmit} className="space-y-4">
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div className="flex-1">
    <label className="block text-sm text-blue-800 font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded" />
        </div>
  
        <div className="flex-1">
        <label className="block text-sm text-blue-800 font-semibold mb-1">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded" />
        </div>
        </div>

        <div>
        <label className="block text-sm text-blue-800 font-semibold mb-1">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded" />
        </div>

        <div>
        <label className="block text-sm text-blue-800 font-semibold mb-1">Note</label>
          <input
            type="text"
            name="note"
            required
            value={formData.note}
            onChange={handleChange}
            rows="5"
            className="w-full p-3 border rounded resize-none" />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Update Contact
        </button>
      </form>
    </div>
  );
};

export default ContactEdit;   