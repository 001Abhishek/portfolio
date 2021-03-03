import styles from './App.module.css';

//import {Header,About,Experience,Projects,Accomplishment,Contact} from './components';
import {About, Experience, Header} from './components';
function App() {
  return (
    <div className={styles.container}>
    
      <Header></Header> 
      <About></About>
       <Experience></Experience>
      {/* <Projects></Projects>
      <Accomplishment></Accomplishment>
      <Contact></Contact>  */}
    </div>
  );
}

export default App;
