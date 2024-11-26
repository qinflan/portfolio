import { Routes, Route } from 'react-router'

//pages
import Home from './components/pages/home/Home'

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