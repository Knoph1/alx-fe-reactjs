// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && !location && !minRepos) {
      // 🔹 Basic search
      try {
        const user = await fetchUserData(username);
        onSearch([user]); // wrap in array for consistency
      } catch (error) {
        onSearch([]); // no results
      }
    } else {
      // 🔹 Advanced search
      await onSearch({ username, location, minRepos });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
    >
      <input
        type="text"
        placeholder="GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <input
        type="text"
        placeholder="Location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <input
        type="number"
        placeholder="Min repositories"
        value={minRepos}
        onChange={(e) => setMinRepos(e.target.value)}
        className="border p-2 w-full mb-4 rounded"
      />
      <button
        type="submit"
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
      >
        Search
      </button>
    </form>
  );
}

export default Search;

v