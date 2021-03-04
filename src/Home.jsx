import React, {Fragment} from 'react';
import {About, Experience, Footer} from './components';

const Home = () => {
    return (
        <div>
            <Fragment>
                <About/>
                <Experience/>        
                <Footer/>
            </Fragment>
        </div>
    );
};

export default Home;