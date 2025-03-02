import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CornChat from "./pages/welcomeCornChat/cornChat.jsx";
import { SignUp, SignIn, GlobalCHat } from "./components";

// TEMPORARY

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/cornChat" element={<CornChat />} />
        <Route path="/globalChat" element={<GlobalCHat />} />
      </Routes>
    </Router>
  );
}

export default App;
