import React from "react";
import "./about.css";

const About = () => {
  return (
    <div id="#about">
      <div className="about_container">
        <div className="about_title">
          <h4>MY STORY</h4>
          <h2>About Me</h2>
        </div>
        <div className="about_details">
          <p>
            Hi, my name is Benjamin. A frontend developer that enjoys bringing
            creative ideas to live in the browser. It is a long established fact
            that a reader will be distracted by the readable content of a page
            when looking at its layout. The point of using Lorem Ipsum is that
            it has a more-or-less normal distribution of letters, as opposed to
            using 'Content here, content here', making it look like readable
            English
          </p>

          <div className="contact_details">
            <div className="left_contact_details">
              <h5>
                <span className="contact_details_span">PHONE NUMBER:</span>{" "}
                07010164278
              </h5>
              <h5>
                <span className="contact_details_span">EMAIL:</span>{" "}
                onuohabenjamin33@gmail.com
              </h5>
            </div>
            <div className="right_contact_details">
              <h5>
                <span className="contact_details_span">LOCATION:</span> Lagos,
                Nigeria.
              </h5>
              <h5>
                <span className="contact_details_span">FREELANCE:</span>{" "}
                Available
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
