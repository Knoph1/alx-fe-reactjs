export async function fetchUserData(username) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) {
    throw new Error("User not found");
  }
  return res.json();
}
