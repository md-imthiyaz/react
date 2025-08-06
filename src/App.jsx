import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/pages/Home'
import About from './Components/pages/About'
import Contact from './Components/pages/Contact'
import Service from './Components/pages/Service'


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/service' element={<Service />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
