import React from "react";
import "../Styles/experience.css";

export default function Experience() {
  return (
    <div className="experience-container">
      <h1>Experience</h1>
      <hr />
      <div className="container-fluid experience" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1600">
        <div className="row justify-content-center">
          <div className="col-lg-4">
            <h1>Tata Consultancy Services</h1>
            <hr />
            <h4>Software Engineer | June 2019 — Present</h4>
            <h6>
              Skills: Java/J2EE, Liferay 7.2 DXP, JSP, JavaScript, HTML/CSS, SQL
            </h6>
            <p>
              <ul>
                <li>
                  Worked on developing Proof-of-concepts for a banking client based in Europe to move
                   from existing technological stack to Liferay DXP.
                </li>
                <li>
                  Worked for a retail client to developed a custom module that enabled multiple user migration between
                different branches by leveraging the client's RESTful API.
                </li>
                <li> Suggested structural changes in existing APIs to accommodate new
            requirements.</li>
               
                <li>
                Developed structures using JSON and templates in FTL for UI enhancements.Used out-of-the-box functionalities of Liferay like AUI validators, Liferay popup
          combined with custom JSP, JS/jQuery code to fullfil crucial requirements.
                </li>
              </ul>
            </p>
          </div>
          <div className="col-lg-4">
            <h1>Windex Software Solution</h1>
            <hr />
            <h4> May 2018 — July 2018</h4>
            <h6>
              Skills: HTML/CSS, Bootsrap, SQL, PHP
            </h6>
            <p>
              <ul>
              <li>
                 Worked as a Summer Intern for the role of web developer
                </li>
                <li>
                Developed a web portal which pays users for reviewing sites, softwares and online products. Used php framework code ignitor. Used html, javascript, 
                bootstrap, css, php and xml for design and functionality. Mysql for database. 
                </li>
    
                <li>
                  Received positive feedback from company's CEO and senior developers.
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}