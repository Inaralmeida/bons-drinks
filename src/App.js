import './assets/global.css';
import styles from './assets/app.module.css'
import Header from './components/Header/Header';
import Footer from  './components/Footer/Footer'
import Contato from './components/Contato/Contato';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Sobre from './components/Sobre/Sobre';
import Home from './components/Home/Home';
import Drinks from './components/drinks/Drinks';

function App() {
  return (
    <div className={styles.appContainer}>
      <Router>

      <Header/>
      
      <Switch>

        <Route path='/contato'>
          <Contato/>
        </Route>

        <Route path='/sobre'>
          <Sobre/>
        </Route>

       

        <Route path='/drinks'>
        <Drinks/>
        </Route>

        <Route path='/'>
        <Home/>
        </Route>
      </Switch>

      <Footer/>

      </Router>
     
    </div>
  );
}

export default App;
