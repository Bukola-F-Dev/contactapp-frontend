import React, { useState, useEffect, useCallback } from "react";
import ContactForm from '../Components/ContactForm'
import ContactList from '../Components/ContactList'
import Search from '../Components/Search'
import axios from "axios";

const BASE_URL = "http://localhost:5000/api/contacts";

const Home = () => {
  const [contacts, setContacts] = useState([]);
  const [message, setMessage] = useState("");

  const fetchContacts = useCallback(async () => {
    try {
      const res = await axios.get(BASE_URL);
      setContacts(res.data);
    } catch (error) {
      setMessage("Failed to fetch contacts.");
    }
  }, []);

  useEffect(() => {
    fetchContacts();
  }, [fetchContacts]);

  const handleSearch = useCallback(async (query) => {
    try {
      if (!query) return fetchContacts();

      const res = await axios.get(`http://localhost:5000/api/contacts/search`, {
        params: {
          name: query,
          email: query,
        },
      });


      setContacts(res.data);
    } catch (error) {
      console.error(error);
      setMessage("Search failed.");
    }
  }, [fetchContacts]);

  

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this contact?");
    if (!confirmed) return;

    try {
      await axios.delete(`${BASE_URL}/${id}`);
      setContacts((prev) => prev.filter((c) => c._id !== id));
      setMessage("Contact deleted successfully.");
    } catch {
      setMessage("Failed to delete contact.");
    }
  };

    return (
        <div>
            <Search onSearch={handleSearch}/>
            <ContactForm onSuccess={fetchContacts}/>
            <ContactList contacts={contacts} onDelete={handleDelete}/>
            
        </div>
    )
}

export default Home;
