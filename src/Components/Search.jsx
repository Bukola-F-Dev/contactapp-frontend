import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onSearch(trimmedQuery);
      setQuery("");            // Reset input after search
    }
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="flex items-center gap-2 mb-20 p-8">
    <input
      type="text"
      placeholder="Search by name or email"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 bg-white rounded flex-1 w-full"
      required />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-800 text-white font-light rounded hover:bg-blue-500"
    >Search</button>
    <button
      type="button"
      onClick={() => {
        setQuery("");
        onSearch(""); // Reset list
      }}
      className="px-4 py-2 bg-gray-400 font-light text-black rounded hover:bg-gray-300"
    >Clear</button>
  </form>
  );
};

export default Search;