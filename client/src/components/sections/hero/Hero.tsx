import "./hero.css";
import "./../../../grids.css";
import { Shadersmith } from "shadersmith-r3f";
import { RiArrowDownDoubleLine, RiDownloadLine } from "react-icons/ri";
import Navbar from "../../ui/Navbar";
import { ToggleTheme } from "../../ui/toggleTheme";
import ResumePDF from "/assets/Quinn_Flanigan_Resume_2025.pdf";
import { ThemeContext } from "../../../hooks/theme/ThemeContext";
import { useContext } from "react";
import Button from "../../ui/Button/Button";

const Hero = () => {
  const { theme } = useContext(ThemeContext);

  const skipHero = () => {
    const element = document.getElementById("about");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="gradient-container" data-speed="2">
      <Shadersmith
        preset={theme === "light" ? "valley" : "gloss"}
        amplitude={theme === "light" ? 14 : 0}
        animationSpeed={theme === "light" ? 0.1 : 0.05}
        grain={40}
        colors={
          theme === "light"
            ? [
                [1, 0.969, 0.91, 1],
                [0.122, 0.125, 0.2, 1],
                [0.855, 0.89, 0.929, 1],
                [0.714, 0.557, 0.624, 1],
                [0, 0, 0, 1],
              ]
            : [
                [0.765, 0.753, 0.69, 1],
                [0.604, 0.749, 0.824, 1],
                [0.463, 0.388, 0.616, 1],
                [0.098, 0.067, 0.106, 1],
                [0, 0, 0, 1],
              ]
        }
      >
        <div className="hero-grid">
          <div className="hero-header-container">
            <a href={ResumePDF} download="Quinn-Flanigan-Resume.pdf">
              <Button icon={<RiDownloadLine />} label="download cv" />
            </a>
            <ToggleTheme />
          </div>
          <div className="hero-name-container">
            <h1 className="hero-name">quinn flanigan</h1>
          </div>
          <div className="hero-nav-container">
            <RiArrowDownDoubleLine
              className="skip-hero-btn transition"
              size={34}
              onClick={skipHero}
            />
            <Navbar />
          </div>

          <div className="hero-mantra-container">
            <RiArrowDownDoubleLine
              className="skip-hero-btn-mobile transition"
              size={34}
              onClick={skipHero}
            />
            <h3 className="header-sm-normal">
              <span>I'm a software engineer</span> passionate about building
              systems with intentional design.
            </h3>
          </div>
        </div>
      </Shadersmith>
    </div>
  );
};

export default Hero;
