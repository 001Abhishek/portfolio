import React from "react";
import "../Styles/aboutMe.css";
import FrontEndImg from "../images/frontEnd.webp";
import BackEndImg from "../images/backEnd.webp";

const About = () => {
  return (
    <div className="container-fluid about-me">
      <div className="text-center">
        <h1>About Me</h1>
        <hr />
      </div>
      <div className="row front-end">
        <img src={FrontEndImg} id="invisible-skills-img" />

        <ul>
          <b>FRONT-END SKILLS</b>
          <li>-> HTML / CSS </li>
          <li>-> JavaScript </li>
          <li>-> JSP</li>
          <li>-> Bootstrap</li>
          <li>-> React(learning)</li>
        </ul>
        <img src={FrontEndImg} id="skills-img-disappear" />
      </div>

      <div className="row back-end">
        <img src={BackEndImg} id="skills-img" />

        <ul>
          <b>BACK-END SKILLS</b>
          <li> -> Spring Boot </li>
          <li> -> MySQL</li>
          <li> -> REST </li>
          <li> -> Mongo Db, AWS, Node JS/ Express JS(learning) </li>

        </ul>
      </div>

      <div className="row extra-skills">
        JAVA Object Oriented Programming | Data Structures and Algorithms 
        Software Design and Architectures - SOLID, MVC | Git |
        NPM |JIRA, SonarLint | JUnit | Jenkins
      </div>

      {/* <div
        className="row extra-skills-invisible"
        style={{ textJustify: "center" }}
      >
        <ul>
          <li> -> JAVA Object Oriented Programming </li>
          <li> -> Unity Engine With C# </li>
          <li> -> Photoshop CC </li>
          <li> -> Blender 3D Modelling </li>
        </ul>
      </div> */}

      <div
        className="row text-center justify-content-center about-description"
        style={{ marginBottom: 20 }}
      >
        <div className="col-sm-6">
          <p>
            I am willing to work on both the front-end and the back-end of 
            applications. I am interested in building scalable projects,
            and managing large code bases. Currently, I am learning React and Spring Boot.
            In my spare time I work on various
            different projects to build my skills and continue learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;