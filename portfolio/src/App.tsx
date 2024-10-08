import React from 'react'
import { Routes, Route } from 'react-router'

//pages
import Home from './components/pages/home/Home'
import Experience from './components/pages/experience/Experience'
import Designs from './components/pages/designs/Designs'
import Contact from './components/pages/contact/Contact'

//ui
import Navbar from './components/ui/Navbar'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/experience' element={<Experience />}/>
      <Route path='/designs' element={<Designs />}/>
      <Route path='/contact' element={<Contact />}/>
    </Routes>
    
  )
}

export default App