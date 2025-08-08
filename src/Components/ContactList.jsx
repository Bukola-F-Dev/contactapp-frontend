 import React, { useEffect, useState } from "react";
  import { Link } from "react-router-dom";
  
  const BASE_URL = "https://contactapp-backend-mnj6.onrender.com/api/contacts";
  
  const ContactList = ({ contacts, onDelete }) => {
   
    return (
      <div className="max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4">Contact List</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div key={contact._id} className="bg-white shadow p-4 rounded">
                <h4 className="text-xl font-bold">{contact.name}</h4>
                <p>Email: {contact.email}</p>
                <p>Phone: {contact.phone}</p>
                <p>Note: {contact.note}</p>
                <div className="mt-4 flex gap-2">
                  <Link
                    to={`/edit/${contact._id}`}
                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(contact._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No contacts found.</p>
          )}
        </div>
      </div>
    );
  };
  
  export default ContactList;