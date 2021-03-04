import styles from './App.module.css';
import {Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
//import {Header,About,Experience,Projects,Accomplishment,Contact} from './components';
import {About, Experience, Footer} from './components';
import Home from './Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
function App() {
  return (
    <div className={styles.container}>
      <Fragment>
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/footer" component={Footer} />
    <Route exact path="/about" component={About} />
    <Route exact path="/experience" component={Experience} />
    <Redirect to="/" />

      {/* <Header></Header> 
      <About></About>
       <Experience></Experience> */}
      {/* <Projects></Projects>
      <Accomplishment></Accomplishment>
      <Contact></Contact>  */}
      </Switch>
      </Fragment>
    </div>
  );
}

export default App;
