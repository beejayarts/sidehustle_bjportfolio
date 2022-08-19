import React from "react";
import "./hero.css";
import benji from "../../assets/resziedP.jpg";
import resume from "../../assets/Benjamin_onuoha_dev_resume.pdf";

const Hero = () => {
  return (
    <section className="hero_section">
      <div className="hero_container">
        <div className="hero_text">
          <h2 className="hero_text_heading">Hi, I am Benjamin</h2>
          <p className="hero_text_desc">
            I am a design-oriented Frontend development intern at Sidehustle and
            I have a knack for creating beautiful, functional and pixel-perfect
            websites. I love Chelsea football club
          </p>
          <a className="btn btn-contact" href="#contact">
            Hire me
          </a>
          <a className="btn btn-resume" href={resume}>
            Download Resume
          </a>
        </div>
        <div className="hero_image">
          <img src={benji} alt="benji" className="benji" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
