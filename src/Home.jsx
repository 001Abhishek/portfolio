import React, {Fragment} from 'react';
import {About, Experience, Footer} from './components';
import Projects from './components/Projects/Projects';

const Home = () => {
    return (
        <div>
            <Fragment>
                <About/>
                <Experience/> 
                <Projects/>       
                <Footer/>
            </Fragment>
        </div>
    );
};

export default Home;