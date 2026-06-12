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
      <Route path="/ReadMore" element={<ReadMorePage />} />

       {/* 404 Page */}
      <Route path="*" element={<h1>404 Page Not Found</h1>} />
    </Routes>
  )
}

export default App
