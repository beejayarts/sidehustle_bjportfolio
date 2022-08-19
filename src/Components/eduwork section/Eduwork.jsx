import React from "react";
import "./eduwork.css";

const Eduwork = () => {
  return (
    <div id="eduwork">
      <div className="eduwork_container">
        <div className="education">
          <div className="eduwork_title">
            <h3>Education</h3>
          </div>
          <div className="eduwork_tab">
            <div className=" school university">
              <div className="dot">
                <div className="bullet"></div>
              </div>
              <div className="school_details">
                <h4>Federal university of technology, Minna</h4>
                <h5>Bachelor of Technology in Engineering</h5>
              </div>
              <div className="year">
                <h6>2014-2019</h6>
              </div>
            </div>

            <div className=" school secondary">
              <div className="dot">
                <div className="bullet"></div>
              </div>
              <div className="school_details">
                <h4>Federal Government College, Wukari</h4>
                <h5>SSCE in Science</h5>
              </div>
              <div className="year">
                <h6>2006-2011</h6>
              </div>
            </div>

            <div className=" school primary">
              <div className="dot">
                <div className="bullet"></div>
              </div>
              <div className="school_details">
                <h4>Morning star primary school, Jalingo</h4>
                <h5>First school leaving cert</h5>
              </div>
              <div className="year">
                <h6>2000-2006</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="work">
          <div className="eduwork_title">
            <h3>Work</h3>
          </div>
          <div className="eduwork_tab">
            <div className=" school university">
              <div className="dot">
                <div className="bullet"></div>
              </div>
              <div className="school_details">
                <h4>Frontend developer intern</h4>
                <h5>Sidehustle</h5>
              </div>
              <div className="year">
                <h6>Actively working</h6>
              </div>
            </div>

            <div className=" school secondary">
              <div className="dot">
                <div className="bullet"></div>
              </div>
              <div className="school_details">
                <h4>Senior Visual designer</h4>
                <h5>Beejayarts</h5>
              </div>
              <div className="year">
                <h6>2019-2022</h6>
              </div>
            </div>

            <div className=" school primary">
              <div className="dot">
                <div className="bullet"></div>
              </div>
              <div className="school_details">
                <h4>Graphic design intern</h4>
                <h5>Lumiere multimedia, Lagos</h5>
              </div>
              <div className="year">
                <h6>2018-2019</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eduwork;
