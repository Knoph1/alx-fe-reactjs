import axios from "axios";

const BASE_URL = "https://api.github.com";

// Basic search: single user lookup
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
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
      `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`
    );

    return response.data.items;
  } catch (error) {
    throw new Error("Error fetching users");
  }
};
