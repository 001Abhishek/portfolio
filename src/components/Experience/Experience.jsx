import React from 'react';
import styles from './Experience.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';


const Experience = () => {
    return (
        <div className={styles.container} data-aos="fade-up" data-aos-duration="3000">      

<span className={styles.experience}>
<FontAwesomeIcon className={styles.icn} icon={ faLaptopCode } />
<h2>Experience</h2> </span>
 
          <ul>
      <li>
        <div>Tata Consultancy Services(2020-Present)</div>
        <p>- Working as Liferay Developer on DXP 7.2 as well as RESTful APIs, JSP,
             JS, JQuery, Git, etc.</p>
      </li>
      <li>
        <div>Tata Consultancy Services(2019-2020)</div>
        <p>- Assistant System Engineer Trainee. Was trained in React JS and Liferay DXP. Prepared various POCs</p>
      </li>
      <li>
        <div>Windex Software Solutions(Summer 2018)</div>
        <p>- Web developer. Used php framework(code-ignitor) and various web technologies to create a web portal for company's major client </p>
      </li>
      </ul>
        </div>
    );
};

export default Experience;