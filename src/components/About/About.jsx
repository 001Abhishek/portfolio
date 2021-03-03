import React from 'react';
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.container}>
        <img className={styles.image} src="https://avatars.githubusercontent.com/u/32428235?s=400&v=4" alt=""/>
        <h1 class="display-4">Hi, I'm Abhishek Pathania</h1>
        <hr className={styles.hr}></hr>
        <p>Full stack Java developer | Aspiring Blogger </p>
        <br></br>
        <div class="row">
	    <div class="col-sm-6">
    	<li>
            I have almost 2 years of experience as a software developer at Tata Consultancy Services.
            I have worked on both backend as well as frontend technologies such as JSP, JS, Java/J2EE, Liferay DXP, Jquery and CSS.
            </li>
            <li>
            I have sound working knowledge of tools like Github, Gitlab, Jira, Sonarlint to work in a collaborative agile environment.
            </li>
            <li>
           I love solving problems.
           While hard engineering problems are often fun to tackle,
           I'm most attracted to solving real customer problems with a business justification.
           I'm looking for a mid-level individual contributor role where I can take on collaborative
            responsibilites, and gain experience with architecture and system design.
            </li>
        </div>
        <div class="col-sm-6">
		    <h3>Highlights</h3>
		    <ul>
            <li>
            Presented research and proof-of-concept for a large banking client based in Europe to move from existing technological stack to Liferay DXP.
          </li>
    		<li>
            Collaborated with multiple teams scattered at different geographical locations. Delivered critical requirements within deadlines, projected to effect thousands of client's customers.
    		</li>
          <li>
              Won best team award and special initiative award within my organization.
    	    </li>
          
		    </ul>
	    </div>
        
        </div>
        </div>
    );
};

export default About;