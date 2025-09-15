import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com";

// Basic search: single user lookup
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Advanced search: multiple users with filters
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = "";

    if (username) query += `${username} `;
    if (location) query += `location:${location} `;
    if (minRepos) query += `repos:>=${minRepos} `;

    const response = await axios.get(
      `${BASE_URL}/search/users?q=${encodeURIComponent(query.trim())}`
    );

    // GitHub search API returns items in response.data.items
    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
