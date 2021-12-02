import logo from './faviconn.jpeg';
import image from './header-bg.jpg';
import './App.css';
import { BrowserRouter as Router, Switch,Routes, Route, Link} from "react-router-dom";
import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Works } from './pages/Works';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


function App() {

  

  return (
     
    <div className="App">
      <Router>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/works" element={<Works/>}/>
        </Routes> 
      
      </Router>
    </div>
  );
}

export default App;