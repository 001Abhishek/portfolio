import React, { Fragment } from 'react';
 import { Container, Row } from 'react-bootstrap';
import Project from './Project';
import CoronaTracker from '../../images/covid.png';
import Quotes from '../../images/quotes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks } from '@fortawesome/free-solid-svg-icons';

import styles from './Projects.module.css';

const Projects = () => {
    return (
        <Fragment>
            <Container className={styles.projectsArea} data-aos="fade-down" data-aos-duration="1000">
            <span className={styles.projectsTitle}>
<FontAwesomeIcon className={styles.icn} icon={ faTasks } />
<h2>Recent Projects</h2> </span>
                <Row className="projects" >
                    <Project src={CoronaTracker} name="Covid-19 Tracker" link="https://github.com/001Abhishek/covid_tracker" para="A COVID-19 tracker to effectively visualize data of active, dead and recovered patients around the world" />
                    <Project src={Quotes} name="Quotes Generator" link="https://github.com/001Abhishek/quotes_generator" para="A Quote generator which gets a random sharable quote everytime you click generate button." />  
                </Row>
            </Container>
        </Fragment>
    );
}
export default  Projects;
