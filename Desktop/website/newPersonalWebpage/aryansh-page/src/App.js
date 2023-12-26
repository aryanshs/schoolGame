import logo from "./logo.svg";
import { React, useState } from "react";
import Home from "./Components/Home/Home";
import Projects from "./Components/Projects/Projects";
import Experience from "./Components/Experience/Experience";
import { Router, Routes, Route } from "react-router-dom";
import ResumeModal from "./Components/Resume/ResumeModal";
import "./App.css";

function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);

  const toggleResumeModal = () => setShowResumeModal(!showResumeModal);
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<Home toggleResumeModal={toggleResumeModal} />}
        />
        <Route
          path="/projects"
          element={<Projects toggleResumeModal={toggleResumeModal} />}
        />
        <Route
          path="/experience"
          element={<Experience toggleResumeModal={toggleResumeModal} />}
        />
      </Routes>
      <ResumeModal isOpen={showResumeModal} close={toggleResumeModal} />
    </div>
  );
}

export default App;
