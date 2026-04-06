import { Routes, Route } from 'react-router'
import Home from './components/sections/home/Home'
import HeaderNavbar from './components/ui/HeaderNavbar'
import Experience from './components/sections/experience/Experience'
import Projects from './components/sections/projects/Projects'
import Contact from './components/sections/contact/Contact'

const App = () => {
  return (
    <>
    <HeaderNavbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/experience' element={<Experience />}/>
      <Route path='/projects' element={<Projects />}/>
      <Route path='/contact-info' element={<Contact />}/>
    </Routes>
    </>
  )
}

export default App