import React, { useContext } from 'react'
import { BsCircleHalf } from "react-icons/bs";
import { FiMoon } from "react-icons/fi";
import { ThemeContext } from './ThemeContext';
import { IoMdSunny } from "react-icons/io";


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
                <BsCircleHalf   className="bg-[var(--background)] border rounded-[3px] border-widget-stroke text-[var(--icon)] cursor-pointer p-3.5 hover:opacity-70 transition" size={47} onClick={toggleTheme} />
            ) : (
                <BsCircleHalf className="bg-[var(--background)] border rounded-[3px] border-widget-stroke text-[var(--icon)] cursor-pointer p-3.5 hover:opacity-70 transition" size={47} onClick={toggleTheme} />
            )}
        </div>
    )

}