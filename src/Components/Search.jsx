import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onSearch(trimmedQuery);  // Trigger search
      setQuery("");            // Reset input after search
    }
  };

  return (
  <form
    onSubmit={handleSubmit}
    className="flex items-center gap-2 mb-4 w-full mt-8"
  >
    <input
      type="text"
      placeholder="Search by name or email"
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="p-2 border rounded flex-1 w-full"
      required
    />
    <button
      type="submit"
      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
    >
      Search
    </button>
    <button
      type="button"
      onClick={() => {
        setQuery("");
        onSearch(""); // Reset list
      }}
      className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400"
    >
      Clear
    </button>
  </form>
  );
};

export default Search;