import logo from './faviconn.ico';
import image from './header-bg.jpg';
import './App.css';

import { Navbar } from './pages/Navbar';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Services } from './pages/Services';
import { Works } from './pages/Works';
import { UsuarioseList } from './pages/UsuarioseList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';import { DatosUsuario } from './pages/DatosUsuario';
;

function App() {

// const { mongoose } = require('./database');

  return (
     
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/services" element={<Services/>} />
          <Route path="/works" element={<Works/>}/>
          <Route path="/lista" element={<UsuarioseList />}/>
          <Route path="/DatosUsuario" element={<DatosUsuario />}/>
        </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;