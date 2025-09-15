import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_APP_GITHUB_API_URL || "https://api.github.com";

// Advanced search
export const searchUsers = async ({ username, location, minRepos }) => {
  try {
    let query = username ? `${username}` : "";

    if (location) query += `+location:${location}`;
    if (minRepos) query += `+repos:>${minRepos}`;

    const response = await axios.get(`${BASE_URL}/search/users?q=${query}`);
    return response.data.items; // returns list of matching users
  } catch (error) {
    throw new Error("Search failed. Please try again.");
  }
};

// Simple fetch (for single user profile)
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error("User not found");
  }
};
