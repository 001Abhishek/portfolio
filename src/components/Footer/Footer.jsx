import React from 'react';
import styles from './Footer.module.css';
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faQuora
  } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
    return (
        <div className={styles.socialContainer} data-aos="fade-right" data-aos-duration="3000">
          <h2>Follow me</h2>
      <a href="https://www.youtube.com/channel/UCpud0pGbrDLfA3g5CnmjYcA/featured"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a href="https://www.facebook.com/profile.php?id=100005520433867"
  className="facebook social">
  <FontAwesomeIcon icon={faFacebook} size="2x" />
</a>
<a href="https://twitter.com/Abhi_rajput001" className="twitter social">
  <FontAwesomeIcon icon={faTwitter} size="2x" />
</a>
<a href="https://www.instagram.com/abhishek_pathania_98/"
  className="instagram social">
  <FontAwesomeIcon icon={faInstagram} size="2x" />
</a>
<a href="https://www.quora.com/profile/Abhishek-Pathania-14/"
  className="quora social">
  <FontAwesomeIcon icon={faQuora} size="2x" />
</a>
</div>
    );
};

export default Footer;