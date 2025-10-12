import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import ProfileDetails from "./pages/ProfileDetails";
import ProfileSettings from "./pages/ProfileSettings";
import Post from "./pages/Post";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";

function App() {
  return (
    <Router>
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-4 text-center">
          React Router Advanced
        </h1>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/*" element={<Profile />} />
          {/* Dynamic route */}
          <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
