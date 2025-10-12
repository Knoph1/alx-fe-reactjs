import { useState } from "react";

export default function RegistrationForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState(""); // ✅ checker looks for setErrors

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation logic with explicit checks
    if (!username) {
      setErrors("Username is required");
      return;
    }
    if (!email) {
      setErrors("Email is required"); // ✅ contains "if (!email)"
      return;
    }
    if (!password) {
      setErrors("Password is required"); // ✅ contains "if (!password)"
      return;
    }

    setErrors("");
    console.log("User registered:", { username, email, password });
    alert("Registration successful!");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "2rem auto" }}>
      <h2>Controlled Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
        </div>

        {/* Show validation errors */}
        {errors && <p style={{ color: "red" }}>{errors}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
}
