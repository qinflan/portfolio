import "./Home.css"
import Sections from '../../ui/Sections'
import Hero from "../hero/Hero"
import Footer from "../../ui/Footer"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

const Home = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, useGSAP);
    useGSAP(() => {
    ScrollSmoother.create({
      smooth: 2,
      effects: true,
      speed: 1.4,
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
    });
    const sections = gsap.utils.toArray<HTMLElement>(".fade-section");
    const items = gsap.utils.toArray<HTMLElement>(".fade-item");

    sections.forEach((section) => {
      gsap.to(section, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    items.forEach((item) => {
      gsap.to(item, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: item,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play reverse play reverse",
        },
      });
    });

    ScrollTrigger.refresh();
  }, []);


  return (
    <div id="smooth-wrapper">
        <div id="smooth-content" className="viewpanel">
          <Hero/>
          <Sections />
          <Footer />
        </div>
    </div>

  )
}

export default Home