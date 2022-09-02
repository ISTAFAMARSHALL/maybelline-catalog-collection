import logo from './logo.svg';
import './App.css';
import Header from './Navigation.js/Header';
import Navbar from './Navigation.js/Navbar';
import Footer from './Navigation.js/Footer';
import MakeUpComponentContainer from './MakeUpContainer.js/MakeUpComponentContainer';

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <MakeUpComponentContainer />
      <Footer />
    </div>
  );
}

export default App;
