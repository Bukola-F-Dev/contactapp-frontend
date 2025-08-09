import React, { useState } from "react";
import axios from "axios";

const BASE_URL = "https://contactapp-backend-mnj6.onrender.com/api/contacts";

const ContactForm = ({ onSuccess }) => {
   
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "" , note: "" });
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState({ type: "", text: "" });

  
  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{11}$/;

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Enter a valid email.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number (11 digits).";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });
  
    if (!validate()) return;
  
    try {
      await axios.post(BASE_URL, formData);
      setFormData({ name: "", email: "", phone: "", note: "" });
      onSuccess();
      setMessage({ type: "success", text: "Contact added successfully!" });
  
      // Clear message after 4 seconds
      setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 4000);
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
  
      // Clear error message after 5 seconds
      setTimeout(() => {
        setMessage({ type: "", text: "" });
      }, 5000);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-8 p-6 bg-white rounded-lg">
  <h2 className="text-3xl text-blue-800 font-bold mb-6">Add New Contact</h2>

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
    {/* Name & Email side-by-side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex-1">
        <label className="block text-sm text-blue-800 font-semibold mb-1">Name</label>
        <input
          name="name"
          placeholder="Enter full name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full border p-2 rounded ${
            errors.name ? "border-red-500" : "border-gray-400"
          }`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
      </div>

      <div className="flex-1">
        <label className="block text-sm text-blue-800 font-semibold mb-1">Email</label>
        <input
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            errors.email ? "border-red-500" : "border-gray-400"
          }`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
    </div>

 
    <div>
      <label className="block text-sm text-blue-800 font-semibold mb-1">Phone</label>
      <input
        name="phone"
        placeholder="Enter phone number"
        value={formData.phone}
        onChange={handleChange}
        className={`w-full p-2 border rounded ${
          errors.phone ? "border-red-500" : "border-gray-400"
        }`}
      />
      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
    </div>

   
    <div>
      <label className="block text-sm text-blue-800 font-semibold mb-1">Note</label>
      <textarea
        name="note"
        placeholder="Add a note..."
        value={formData.note}
        onChange={handleChange}
        rows="5"
        className={`w-full p-3 border rounded resize-none ${
          errors.note ? "border-red-500" : "border-gray-400"
        }`}
      />
      {errors.note && <p className="text-red-500 text-sm">{errors.note}</p>}
    </div>

    <button
      type="submit"
      className="bg-blue-800 text-white font-light px-6 py-2 rounded-full hover:bg-blue-600"
    >
      Add Contact
    </button>

    {message.text && (
      <p
        className={`mt-2 text-sm ${
          message.type === "error" ? "text-red-600" : "text-green-600"
        }`}
      >
        {message.text}
      </p>
    )}
  </form>
</div>
  );
};

export default ContactForm;