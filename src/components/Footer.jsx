import React from 'react';
import Resume from "../Resume/AbhishekResume.pdf";

import "../Styles/footer.css";

export default function Footer() {
  return (
    <footer className="page-footer">
      <div className="footer-content">
          <div className="container">
            <div className="row justify-content-center title">
              <h1>Contact Me</h1>
            </div>
            {/* <div className="row">
              <div className="col-lg-7">
                */}
                <div className="row justify-content-center title">

                  <a href="https://github.com/001Abhishek">
                    <div className="col-md-2">
                      <li className="fa fa-github"></li>
                    </div>
                  </a>
                  <a href="https://www.linkedin.com/in/abhishek-s-pathania-095816137/">
                    <div className="col-md-2">
                      <li className="fa fa-linkedin"></li>
                    </div>
                  </a>
                  <a href="https://www.youtube.com/channel/UCpud0pGbrDLfA3g5CnmjYcA/featured">
                    <div className="col-md-2">
                      <li className="fa fa-youtube"></li>
                    </div>
                  </a>
                  <a href="mailto:aprjaput321@gmail.com?" subject="Portfolio">
                    <div className="col-md-2">
                      <li className="fa fa-envelope"></li>
                    </div>
                  </a>
                </div>
              </div>
            </div>
        {/* </div>
      </div> */}
     
    </footer>
  );
}