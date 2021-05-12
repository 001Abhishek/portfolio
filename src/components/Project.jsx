import React, { Fragment } from 'react';
 import { Col, Figure } from 'react-bootstrap';
 import Image from 'react-bootstrap/Image';
import '../Styles/project.css';

const Project = (props) => {
    return (
        <Fragment>
            <Col lg={4} md={6} sm={12} className="projectArea" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1600">
                <Figure>
                    <Image src={props.src} fluid />
                </Figure>
                <h3 className="projectTitle"><a href={props.link}>{props.name}</a></h3>
                <p className="projectPara">{props.para}</p>
            </Col>
        </Fragment>
    );
}

export default Project;
