import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-purple-900 text-white  flex flex-col ">
      {/* Seção de links de navegação */}
      <div className="flex flex-wrap justify-center gap-8 px-6 py-4 ">
        <Link to='/aboutus' className="cursor-pointer hover:text-purple-300 transition-colors duration-300">ABOUT US</Link>
        <Link to='/aboutus' className="cursor-pointer hover:text-purple-300 transition-colors duration-300">HELP</Link>
        <Link to='/aboutus' className="cursor-pointer hover:text-purple-300 transition-colors duration-300">CONTACT</Link>
        <Link to='/aboutus' className="cursor-pointer hover:text-purple-300 transition-colors duration-300">SERVICES</Link>
      </div>

      {/* Linha separadora */}
      <div className="h-px  bg-white "></div>

      {/* Rodapé inferior */}
      <div className="bg-purple-800 text-center py-3 text-sm">
        © 2024 Copyright: E-Commerce
      </div>
    </footer>
  );
}

export default Footer;
