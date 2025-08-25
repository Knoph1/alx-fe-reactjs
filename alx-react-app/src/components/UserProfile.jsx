import React from "react";

const UserProfile = ({ name, age, bio }) => {
  return (
    <div className="user-profile" style={{ border: "1px solid #ccc", padding: "15px", borderRadius: "8px", width: "250px", margin: "10px auto" }}>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
