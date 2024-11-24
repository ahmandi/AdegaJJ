import React from 'react';
import AdegaJJ from '../imagens/adega.png'

const About = () => {
  return (
    <section className="about">
      <div className="about-text">
        <h2>Quem somos</h2>
        <p>
          A Adega JJ é um espaço único que nasceu em 2021 para oferecer os melhores vinhos 
          e destilados. Desde o início, nossa missão tem sido compartilhar momentos especiais 
          com nossos clientes.
        </p>
      </div>
      <div className="about-image">
        <img 
          src={AdegaJJ} 
          alt="Foto da Adega JJ" 
        />
      </div>
    </section>
  );
};

export default About;
