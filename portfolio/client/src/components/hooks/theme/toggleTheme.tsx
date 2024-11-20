import React, { useContext } from 'react'
import { BsSun } from "react-icons/bs";
import { WiMoonAltThirdQuarter } from "react-icons/wi";
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
                <BsSun className="bg-[var(--page-foreground)] rounded-lg border border-gray-300 text-[var(--icon)] cursor-pointer p-1" size={34} onClick={toggleTheme} />
            ) : (
                <WiMoonAltThirdQuarter  className="bg-[var(--page-foreground)] rounded-lg border border-gray-300 text-[var(--icon)] cursor-pointer p-1" size={34} onClick={toggleTheme} />
            )}
        </div>
    )

}