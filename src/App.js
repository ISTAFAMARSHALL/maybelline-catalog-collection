import logo from './logo.svg';
import './App.css';
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Footer from './Navigation.js/Footer';
import MakeUpComponentContainer from './MakeUpContainer.js/MakeUpComponentContainer';
import {Switch, Route} from 'react-router-dom'
import Home from './Navigation.js/Home';
import About from './Navigation.js/About';
import Form from './Navigation.js/Form';
import CardDetails from './MakeUpContainer.js/CardDetails';

function App() {

  return (
    <div>
      
        <Header />

          <Navbar />

            <Switch>

              <Route exact path="/" >
                <Home />
              </Route>

              <Route exact path="/products/new" >
                <Form />
              </Route>

              <Route path="/products/id" >
                <CardDetails />
              </Route>
              
              <Route exact path="/products/" >
                <MakeUpComponentContainer />
              </Route>
              
              <Route exact path="/about"  >
                <About />
              </Route>

            </Switch>

        <Footer />

    </div>
  );
}

export default App;
