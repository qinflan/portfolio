import React, { useContext } from 'react'
import { BsSun } from "react-icons/bs";
import { SiMoonrepo } from "react-icons/si";
import { ThemeContext } from './ThemeContext';

// define toggleTheme as functional component
export const ToggleTheme: React.FC = () => {
    // access theme context
    const themeContext = useContext(ThemeContext)

    // handle error incase component isn't wrapped by theme provider
    if (!themeContext) {
        throw new Error("ToggleTheme button must be wrapped by the ThemeProvider")
    }
    const { theme, toggleTheme } = themeContext

    return (
        <div className="toggle-container">
            {/* Conditionally render the icons based on the current theme */}
            {theme === "light" ? (
                <BsSun className="icon cursor-pointer" size={28} onClick={toggleTheme} />
            ) : (
                <SiMoonrepo className="icon cursor-pointer" size={28} onClick={toggleTheme} />
            )}
        </div>
    )

}