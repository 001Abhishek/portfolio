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
      <p className="about-me">My name is Abhishek Pathania and I am a Software Developer, currently living in Gujarat, India.
          I have a Bachelor of Science in Computer Science from Gujarat Technological University. 
           I am both driven and self-motivated, and I am constantly experimenting with new technologies and 
           techniques. I love Java and I'm passionate about Backend 
        Development, and strive to better 
        myself as a developer, and the development community as a whole. In my free time,
         I like to write blogs and read books. 
           </p>
      <div className="row front-end" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1600">
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

      <div className="row back-end" data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="1600">
        <img src={BackEndImg} id="skills-img" />

        <ul>
          <b>BACK-END SKILLS</b>
          <li> -> Spring Boot </li>
          <li> -> MySQL</li>
          <li> -> REST </li>
          <li> -> Mongo Db, AWS, Node JS/ Express JS(learning) </li>

        </ul>
      </div>

      <div className="row extra-skills" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1600">
        JAVA Object Oriented Programming | Data Structures and Algorithms 
        Software Design and Architectures - SOLID, MVC | Tools - Git, JIRA, SonarLint |
        NPM | JUnit | Jenkins
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
        className="row text-center justify-content-center about-description " data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1600"
        style={{ marginBottom: 20 }}
      >
        <div className="col-sm-6">
          <p>
            I am willing to work on front-end and back-end of 
            applications. I am interested in building scalable projects,
            and managing large code bases. Currently, I am learning React and Spring Boot.
            In my spare time I love working on
            side projects to build my skills and continue learning.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;