import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./Styles/appStyle.css"
import Resume from './Resume/AbhishekResume.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className="App">
   <Header/>
    <div className="home">
      <div className="container">
      <div className="row text-center justify-content-center">
      <div className="col-lg-6 intro-content">
      <hr />
      
      <h1>Abhishek Sudarshan Pathania</h1>
              <p>
                Software Developer @ Tata Consultancy Services. I love <b>coding</b>,
                and I aspire to become a great developer!
              </p>
              <hr />
              <div className="social-links">
                <a href="https://github.com/001Abhishek" target="_blank">
                  <li className="fa fa-github"></li>
                </a>
                <a
                  href="https://www.linkedin.com/in/abhishek-s-pathania-095816137/"
                  target="_blank"
                >
                  <li className="fa fa-linkedin"></li>
                </a>
                <a href={Resume} download="AbhishekResume.pdf">
                  <li className="fa fa-address-book"></li>
                </a>
              </div>

              <div id="blank"></div>
            </div>
          </div>
        </div>
      </div>
     
      <div className="experienceLinkTo">
        <Experience />
      </div>
      <div className="projectsLinkTo">
        <Projects />
      </div>
      <div className="aboutLinkTo">
        <About />
      </div>

      

      <div className="footerLinkTo">
        <Footer />
      </div>
    </div>
  );
}
export default App;
