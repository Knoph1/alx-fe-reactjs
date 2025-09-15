import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

function Search({ onSearch }) {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      // 🔹 Basic search (single user lookup)
      if (username && !location && !minRepos) {
        const user = await fetchUserData(username);
        setUsers([user]); // keep consistent array
        if (onSearch) onSearch([user]);
      } else {
        // 🔹 Advanced search
        const results = await searchUsers({ username, location, minRepos });

        // fetch full details (for location, repos, etc.)
        const detailedResults = await Promise.all(
          results.map(async (user) => {
            try {
              const details = await fetchUserData(user.login);
              return { ...user, ...details };
            } catch {
              return user;
            }
          })
        );

        setUsers(detailedResults);
        if (onSearch) onSearch(detailedResults);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-lg">
      {/* Search Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <input
            type="text"
            placeholder="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <input
            type="number"
            placeholder="Min Repositories"
            value={minRepos}
            onChange={(e) => setMinRepos(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
        >
          Search
        </button>
      </form>

      {/* Status messages */}
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {/* Results */}
      {users.length > 0 && (
        <div className="mt-6 grid gap-4">
          {users.map((user) => (
            <div
              key={user.id}
              className="bg-white shadow p-4 rounded flex items-center space-x-4"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{user.login}</h3>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  View Profile
                </a>
                {/* ✅ Show location if available */}
                {user.location && (
                  <p className="text-sm text-gray-500 mt-1">
                    📍 {user.location}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
