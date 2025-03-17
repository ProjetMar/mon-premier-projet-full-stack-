
import React from 'react'
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AddRecette from './pages/AddRecette'
import Recette from './pages/Recette';
// import Header from './components/Header'
// import Banner from './components/Banner';
const root = createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddRecette />} />
        <Route path='/add/:id' element={<Recette />} />
      </Routes>
    </Router>
  </React.StrictMode>
)