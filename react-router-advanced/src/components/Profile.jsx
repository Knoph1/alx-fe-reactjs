import { Link, Outlet } from "react-router-dom";

function Profile() {
  return (
    <div>
      <h2>Profile Page (Protected)</h2>
      <nav>
        <Link to="details">Profile Details</Link> |{" "}
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Outlet /> {/* ✅ Nested routes render here */}
    </div>
  );
}

export default Profile;
