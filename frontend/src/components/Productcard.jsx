import React from 'react';
import AddCarrinho from '../imagens/imageAddCarrinho.png';
import AddFav from '../imagens/imageAddFav.png';
import ComprarIcon from '../imagens/imageBotaoComprar.png';

function Productcard(props) {
  return (
    <main className="flex-grow p-8 bg-gray-200">
      <div className="flex justify-center">
        <div className="bg-gray-100 border border-purple-900 rounded-lg p-4 w-64 shadow-lg">
          {/* Ícones de Ações */}
          <div className="flex justify-end gap-2">
            <img
              src={AddCarrinho}
              alt="Adicionar ao carrinho"
              className="h-5 w-5 cursor-pointer"
            />
            <img
              src={AddFav}
              alt="Adicionar aos favoritos"
              className="h-5 w-5 cursor-pointer"
            />
          </div>
          {/* Imagem do Produto */}
          <img
            src={props.imagem }
            alt="Produto"
            className="mx-auto h-36 my-4"
          />
          {/* Descrição */}
          <p className="text-sm text-gray-700">
            {props.disc || 'Descrição não disponível'}
          </p>
          {/* Preço */}
          <h2 className="text-lg font-bold mt-4 text-black">
            {props.price || 'Preço não informado'}
          </h2>
          {/* Botão Comprar */}
          <button className="bg-purple-800 text-white rounded-md py-1 mt-6 w-full flex items-center justify-center gap-2">
            <img
              src={ComprarIcon}
              alt="Ícone Comprar"
              className="h-5 w-5"
            />
            COMPRAR
          </button>
        </div>
      </div>
    </main>
  );
}

export default Productcard;
