import React, { useState } from 'react';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import { EnvelopeIcon } from "@heroicons/react/24/outline"; 
import insta from '../imagens/imageInsta.png';
import Wpp from '../imagens/imageWpp.png';
import Fb from '../imagens/imageFb.png';

function AboutUs() {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Header />
      <div className="bg-gradient-to-b from-violet-100 to-violet-300 py-16 px-8">
        <h1 className="text-4xl font-semibold text-gray-800 text-center mb-12">Fale Conosco</h1>
        <div className="flex flex-col items-center gap-6">
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Nome"
            className="w-3/4 md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="tel"
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            placeholder="Telefone com DDD"
            className="w-3/4 md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="E-mail"
            className="w-3/4 md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <textarea
            name="mensagem"
            value={formData.mensagem}
            onChange={handleChange}
            placeholder="Mensagem"
            className="w-3/4 md:w-1/2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-violet-400"
            rows="5"
          />
          <button className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-3 px-8 rounded-lg mt-6 shadow-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 flex items-center">
            <EnvelopeIcon className="h-6 w-6 mr-2" />
            Enviar
          </button>
        </div>
        <div className="mt-8 text-sm text-center text-gray-600">
          <p>
            Ao enviar, concordo com os{' '}
            <span className="underline text-blue-500 cursor-pointer">termos de uso</span> e{' '}
            <span className="underline text-blue-500 cursor-pointer">política de privacidade</span>, e afirmo ter mais de 18 anos.
          </p>
        </div>
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Horário de Funcionamento</h2>
          <p className="text-lg mt-3 text-gray-600">
            E-commerce - Seg a Sexta - 9h às 18h / Sáb - 9h às 13h
          </p>
        </div>
        <div className="flex justify-center items-center mt-10 gap-10">
        <img
          className="h-24 w-24 md:h-36 md:w-36 cursor-pointer transition-transform hover:scale-110"
          src={insta}
          alt="Instagram"
        />
        <img
          className="h-24 w-24 md:h-36 md:w-36 cursor-pointer transition-transform hover:scale-110"
          src={Wpp}
          alt="WhatsApp"
        />
        <img
          className="h-24 w-24 md:h-36 md:w-36 cursor-pointer transition-transform hover:scale-110"
          src={Fb}
          alt="Facebook"
        />
      </div>
      </div>
      
    </>
  );
}

export default AboutUs;
