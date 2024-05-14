import React from 'react'
import './App.css'
import NabMenu from './components/NavMenu/NabMenu'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Service from './components/NavMenu/Service'
import About from './components/NavMenu/About'
import Contact from './components/NavMenu/Contact'
import HeroDiv from './components/HeroDiv/HeroDiv'


function App() {

  return (
    <div>
      <BrowserRouter>
        <NabMenu />
        <Routes>
          <Route path="#/" /> {/* 👈 Renders at /app/ */}
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <HeroDiv />
    </div>
  )
}

export default App
