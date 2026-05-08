import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Audit from "./pages/Audit";
import Report from "./pages/Report";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* Navbar */}
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/audit" element={<Audit />} />

          <Route path="/report/:id" element={<Report />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App
