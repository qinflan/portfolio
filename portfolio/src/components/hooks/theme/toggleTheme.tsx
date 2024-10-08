import React, { useContext } from 'react'
import "./ToggleTheme.css"
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
            <input
            type="checkbox"
            id="check"
            className="toggle"
            onChange={toggleTheme}
            checked={theme === "light"}
            />
            <label htmlFor="check"></label>
        </div>
    )

}