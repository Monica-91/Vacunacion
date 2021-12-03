import logo from './faviconn.jpeg';
import image from './header-bg.jpg';
import './App.css';

import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Works } from './pages/Works';
import { UsuarioseList } from './pages/UsuarioseList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';;


function App() {

  

  return (
     
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/works" element={<Works/>}/>
          <Route path="/lista" element={<UsuarioseList />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;