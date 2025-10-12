import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee" }}>
      <Link to="/">Home</Link> |{" "}
      <Link to="/about">About</Link> |{" "}
      <Link to="/profile">Profile</Link> |{" "}
      <Link to="/post/1">Sample Post</Link>
    </nav>
  );
}

export default Navbar;
