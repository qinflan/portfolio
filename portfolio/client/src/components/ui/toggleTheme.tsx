import React, { useContext } from "react";
import { PiSquareHalfBottomDuotone } from "react-icons/pi";
import { ThemeContext } from "../../hooks/theme/ThemeContext";
import Button from "./Button/Button";

export const ToggleTheme: React.FC = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    throw new Error("ToggleTheme button must be wrapped by the ThemeProvider");
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <div className="toggle-container">
      {theme === "light" ? (
        <Button
          icon={<PiSquareHalfBottomDuotone size={22} />}
          onClick={toggleTheme}
        />
      ) : (
        <Button
          icon={
            <span style={{ transform: "rotate(180deg)" }}>
              <PiSquareHalfBottomDuotone size={22} />
            </span>
          }
          onClick={toggleTheme}
        />
      )}
    </div>
  );
};
