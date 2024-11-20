import React from 'react'
import { Routes, Route } from 'react-router'

//pages
import Home from './components/pages/home/Home'
import Experience from './components/pages/experience/Experience'
import Designs from './components/pages/designs/Designs'
import Contact from './components/pages/contact/Contact'
import Projects from './components/pages/projects/Projects'

//ui
import Navbar from './components/ui/Navbar'

const App = () => {
  return (
    <>
    {/* <Navbar /> */}
    <Routes>
      <Route path='/' element={<Home />}/>
      {/* <Route path='/experience' element={<Experience />}/>
      <Route path='/design' element={<Designs />}/>
      <Route path='/contact' element={<Contact />}/>
      <Route path='/projects' element={<Projects />}/> */}
    </Routes>
    </>
  )
}

export default App