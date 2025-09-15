import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (username && !location && !minRepos) {
        // Basic search
        const user = await fetchUserData(username);
        onSearch([user]); // wrap single user in array
      } else {
        // Advanced search
        const params = { username, location, minRepos };
        await onSearch(params);
      }
    } catch (error) {
      onSearch([]); // clear results if not found
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
        className="bg-blue-500 text-white px-4 py-2 rounded w-full"
      >
        Search
      </button>
    </form>
  );
}

export default Search;
