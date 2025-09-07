import { useContext } from "react";
import UserContext from "./UserContext";

const UserProfile = () => {
  const userData = useContext(UserContext);

  return (
    <div
      className="user-profile"
      style={{
        border: "1px solid #ccc",
        padding: "15px",
        borderRadius: "8px",
        width: "250px",
        margin: "10px auto",
      }}
    >
      <h2>{userData.name}</h2>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
};

export default UserProfile;
