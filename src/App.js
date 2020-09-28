import React from "react";
import "./App.css";
import Feed from "./pages/Feed";
import { Router } from "@reach/router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <h1>My News Feed</h1>
      <Navbar />
      <Router>
        <Feed path="/" />
        <Login path="/login" />
      </Router>
    </div>
  );
}

export default App;
