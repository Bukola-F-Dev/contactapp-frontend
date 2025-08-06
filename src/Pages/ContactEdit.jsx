import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/contacts";

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

  // Fetch contact by ID on mount
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

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle update
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    try {
      await axios.put(`${BASE_URL}/${id}`, formData);
      setMessage({ type: "success", text: "Contact updated successfully!" });

      // Optional: redirect after a delay
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
    <div className="max-w-md mx-auto mt-8 bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Edit Contact</h2>

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
        <div>
          <label className="block text-sm font-semibold">Name</label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Email</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Phone</label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold">Note</label>
          <input
            type="text"
            name="note"
            required
            value={formData.note}
            onChange={handleChange}
            className="w-full p-2 border rounded mt-1"
          />
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