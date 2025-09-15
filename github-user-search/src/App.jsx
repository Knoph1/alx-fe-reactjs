import { useState } from "react";
import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import { searchUsers } from "./services/githubService";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (params) => {
    setLoading(true);
    setError("");
    try {
      const data = await searchUsers(params);
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold text-blue-600 mb-6">
        GitHub User Search
      </h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-4">Loading...</p>}
      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <SearchResults users={users} />
    </div>
  );
}

export default App;
