import React from 'react'
import Home from './Home'
import ReadMorePage from './ReadMorePage'
import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Routes>
      {/* Default page */}
      <Route path="/" element={<Home />} />

      {/* Read More Page */}
      <Route path="/ReadMorePage" element={<ReadMorePage />} />
    </Routes>
  )
}

export default App
