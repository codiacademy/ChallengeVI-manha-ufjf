import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Checkout() {
  return (
    <>
    <Header/>
    <main className="flex-1  bg-gradient-to-t from-gray-400 via-gray-300 to-gray-200 text-white p-5">
      {/* Cabeçalho */}
      <div className="flex justify-between p-5">
        <h1 className="text-4xl text-black font-light tracking-wide">SEUS ITENS</h1>
        <h1 className="text-4xl text-black font-light tracking-wide">QNTD.</h1>
      </div>

      {/* Produto */}
      <div className="flex items-center gap-6 bg-gray-800 rounded-xl shadow-lg p-5 hover:shadow-purple-700 transition-shadow duration-300">
        <img
          src="imagens/imageProdutoTeclado01.png"
          alt="Produto"
          className="h-52 w-52 rounded-lg shadow-md hover:shadow-purple-500 transition-shadow duration-300"
        />
        <div className="ml-6 flex-grow">
          <p className="text-2xl font-light tracking-wide">
            Teclado Mecânico RedDragon, Preto, entrada USB, 1500DPI
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
            src="imagens/imageLixeiraPreta.png"
            alt="Excluir"
          />
          <h1 className="text-2xl font-semibold">1</h1>
          <img
            className="h-8 w-8 cursor-pointer hover:scale-110 transition-transform duration-200"
            src="imagens/imageMaisPreto.png"
            alt="Adicionar"
          />
        </div>
      </div>

      {/* Resumo */}
      <div className="bg-gradient-to-br from-purple-800 to-purple-600 rounded-xl mt-10 p-8 shadow-lg">
        <h1 className="text-5xl font-light pb-6">Resumo:</h1>
        <div className="flex flex-col gap-5 mt-6">
          <h1 className="text-2xl font-light">Valor dos Produtos:</h1>
          <h1 className="text-2xl font-light">Frete:</h1>
          <div className="flex gap-10 items-center mt-4">
            <h1 className="text-2xl font-light">CEP:</h1>
            <input
              type="tel"
              required
              minLength="8"
              maxLength="8"
              placeholder="12345678"
              className="h-10 w-48 text-xl rounded-md bg-gray-900 text-white px-4 placeholder-gray-500 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-12">
          <h1 className="text-3xl font-light">R$499,90</h1>
          <h1 className="text-3xl font-light">R$0,00</h1>
          <button className="mt-4 p-3 bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-md shadow-md hover:scale-105 transition-transform duration-300">
            OK
          </button>
        </div>
      </div>

      {/* Botões de Ação */}
      <div className="flex gap-8 mt-10">
        <button className="p-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-md w-[220px] shadow-md hover:scale-105 transition-transform duration-300">
          IR PARA O PAGAMENTO
        </button>
        <button className="p-4 bg-gradient-to-r from-purple-900 to-purple-700 text-white rounded-md w-[220px] shadow-md hover:scale-105 transition-transform duration-300">
          CONTINUAR COMPRANDO
        </button>
      </div>
    </main>
    <Footer/></>
  );
}

export default Checkout;