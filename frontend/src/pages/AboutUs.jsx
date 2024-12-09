import React, { useState } from 'react';
import Header from '../components/Header';
import SocialMedia from '../components/SocialMedia';
import { EnvelopeIcon } from "@heroicons/react/24/outline"; 

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
    <><Header/>
    
    <div className="bg-white p-10">
      <h1 className="text-4xl text-gray-700 font-light mb-10">Fale Conosco</h1>
      <div className="flex flex-col items-center gap-6">
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Nome"
          className="w-2/5 p-2 border rounded-md border-gray-500"
        />
        <input
          type="tel"
          name="telefone"
          value={formData.telefone}
          onChange={handleChange}
          placeholder="Telefone com DDD"
          className="w-2/5 p-2 border rounded-md border-gray-500"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="E-mail"
          className="w-2/5 p-2 border rounded-md border-gray-500"
        />
        <textarea
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Mensagem"
          className="w-2/5 p-2 border rounded-md border-gray-500"
          rows="5"
        />
        <button className="bg-black text-white w-2/5 py-2 mt-6 flex justify-center items-center">
          <EnvelopeIcon className="h-6 w-6 mr-2" />
          Enviar
        </button>
      </div>
      <div className="mt-6 text-sm text-center">
        <p>
          Ao enviar, concordo com os{' '}
          <span className="underline text-blue-500 cursor-pointer">termos de uso</span> e{' '}
          <span className="underline text-blue-500 cursor-pointer">política de privacidade</span>, para
          contatar os próximos anunciantes e afirmo ter mais de 18 anos.
        </p>
      </div>
      <div className="mt-10 text-center">
        <h2 className="text-2xl">Horário de funcionamento</h2>
        <p className="text-lg mt-3">E-commerce - Seg a Sexta - 9h às 18h / Sáb - 9h às 13h</p>
      </div>
    </div>
    <SocialMedia/></>
  );
}

export default AboutUs;
