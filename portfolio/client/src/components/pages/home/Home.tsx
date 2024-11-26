import "./Home.css"
import LeftPanel from '../../ui/LeftPanel'
import RightPanel from '../../ui/RightPanel'

const Home = () => {
  return (
    <div className="page-content-container">
      <div className="format-display">
        <LeftPanel />
        <RightPanel />
      </div>
    </div>

  )
}

export default Home