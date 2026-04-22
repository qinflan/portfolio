import "./HeaderNavbar.css";
import { useNavigate } from "react-router";
import { ThemeContext } from "../../hooks/theme/ThemeContext";
import { useContext } from "react";

const HeaderNavbar = () => {
  const navigate = useNavigate();

  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    throw new Error("ToggleTheme button must be wrapped by the ThemeProvider");
  }
  const { theme, toggleTheme } = themeContext;

  return (
    <div className="header-navbar-container">
      <ul className="header-nav-grid">
        <li
          className="grid-nav-link header-home"
          onClick={() => navigate("/#about")}
        >
          quinn flanigan
        </li>
        <div className="grid-page-links">
          <li className="nav-link-md" onClick={() => navigate("/experience")}>
            experience
            <br />
            education
          </li>
          <li className="nav-link-md" onClick={() => navigate("/projects")}>
            projects
            <br />
            skills
          </li>
          {/* <li className="grid-nav-link" onClick={() => navigate("/contact-info")}>contact<br/>info</li> */}
        </div>
        <li className="nav-link-md header-theme-btn" onClick={toggleTheme}>
          <span className="nav-theme-preview"></span>
          {theme === "light" ? "dark" : "light"}
        </li>
      </ul>
    </div>
  );
};

export default HeaderNavbar;
