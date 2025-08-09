 import React from "react";
  import { Link } from "react-router-dom";
  
  const ContactList = ({ contacts, onDelete }) => {
   
    return (
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl text-blue-800 font-bold mb-4">Contact List</h2>
  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contacts.length > 0 ? (
            contacts.map((contact) => (
              <div key={contact._id} className="bg-white shadow p-4 rounded">
              <div className="max-w-md p-6 bg-blue-500 rounded-xl shadow-lg text-white">
  <h5 className="text-2xl font-bold mb-1 drop-shadow-md">
    {contact.name}
  </h5>
  <p className="text-1xl mb-1">
    <span className="font-light underline decoration-blue-300">Email:</span> {contact.email}
  </p>
  <p className="text-1xl mb-1">
    <span className="font-light underline decoration-blue-300">Phone:</span> {contact.phone}
  </p>
  <p className="text-1xl">
    <span className="font-light underline decoration-blue-300">Note:</span> {contact.note}
  </p>
</div>
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