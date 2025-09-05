import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Import components
import WelcomeMessage from "./components/WelcomeMessage";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <MainContent />

      {/* Welcome message component */}
      <WelcomeMessage />

      {/* User Profiles */}
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px", marginTop: "20px" }}>
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography." />
        <UserProfile name="Bob" age="30" bio="Enjoys coding, gaming, and traveling." />
        <UserProfile name="Charlie" age="28" bio="Passionate about cooking and fitness." />
      </div>

      <Footer />

      {/* Default Vite + React Starter Section */}
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
