import { useState } from "react";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg bg-white shadow rounded-lg p-6"
    >
      <div className="flex flex-col sm:flex-row gap-4">
        <input
          type="text"
          placeholder="Search by username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="flex-1 border rounded-lg p-2"
        />
        <input
          type="text"
          placeholder="Filter by location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="flex-1 border rounded-lg p-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
