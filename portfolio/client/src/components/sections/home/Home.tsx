import "./Home.css"
import Sections from '../../ui/Sections'
import Hero from "../hero/Hero"
import Footer from "../../ui/Footer"

const Home = () => {
  return (
    <div className="page-content-container">
        <Hero/>
        <Sections />
        <Footer />
    </div>

  )
}

export default Home