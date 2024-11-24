import React from 'react';
import About from './components/About';
import Footer from './components/Footer';
import Banner from './imagens/banner.png'
import './App.css';

const App = () => {
  return (
    <div className="app container">
      <img src={Banner} className="img-fluid" alt='Banner contendo imagem da adega jj' />
      <About />
      <Footer />
    </div>
  );
};

export default App;
