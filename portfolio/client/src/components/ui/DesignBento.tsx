import React from 'react'
import { designData } from '../pages/designs/designData'
import "./DesignBento.css"


const DesignBento = () => {
  return (
    <div className="work-section-container">
    <div className='section-title'>design</div>

    <div className="design-section-container">
    {designData.map((design, index) => (
          <div key={index} className="design-item">
            <img src={design.src} alt={`Design ${index + 1}`} className="design-image" />
          </div>
        ))}
    </div>
    </div>
  )
}

export default DesignBento