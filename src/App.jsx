import { useState } from 'react';
import './App.css';
import Sign from './componentes/sign/Sign';
import NavBar from './componentes/navBar/NavBar';
import Footer from './componentes/footer/Footer';
import Cookies from './componentes/cookies/Cookies';

function App() {

  return (
    <div className="App h-screen">
      <Sign />
      {/* <NavBar />
      <Footer /> */}
      <Cookies />
    </div>
  );
}

export default App;
