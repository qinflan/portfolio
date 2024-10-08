import React from 'react'
import { ToggleTheme } from '../../hooks/theme/toggleTheme'

const Home = () => {
  return (
    <div>
        <h1 className="hero-text">
            Hi! I'm Quinn
        </h1>
        <ToggleTheme />

    </div>

  )
}

export default Home