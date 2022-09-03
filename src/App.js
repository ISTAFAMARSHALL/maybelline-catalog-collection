import logo from './logo.svg';
import './App.css';
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Footer from './Navigation.js/Footer';
import MakeUpComponentContainer from './MakeUpContainer.js/MakeUpComponentContainer';
import {Switch, BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './Navigation.js/Home';
import About from './Navigation.js/About';
import Form from './Navigation.js/Form';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Navbar />
          <Switch>
            <Route exact path="/home" >
              <Home />
            </Route>

            <Route>
              <Form exact path="/products/new" />
            </Route>
            
            <Route>
              <MakeUpComponentContainer exact path="/products/" />
            </Route>
            
            <Route exact path="/about"  >
              <About />
            </Route>
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
