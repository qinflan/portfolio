import { Routes, Route } from 'react-router'

import Home from './components/sections/home/Home'

const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}/>
    </Routes>
    </>
  )
}

export default App