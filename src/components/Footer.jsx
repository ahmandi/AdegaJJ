import React from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="https://instagram.com/adega_jj" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} />
        </a>
        <a href="https://wa.me/5551999999999" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp size={24} />
        </a>
      </div>
      <p className="footer-text">Desde 2021</p>
    </footer>
  );
};

export default Footer;
