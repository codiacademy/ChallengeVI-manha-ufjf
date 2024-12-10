import React from 'react';
import AddCarrinho from '../imagens/imageAddCarrinho.png';
import AddFav from '../imagens/imageAddFav.png';
import ComprarIcon from '../imagens/imageBotaoComprar.png';
import api from '../server/api';
import { Link } from 'react-router-dom';

function Productcard({ product, imagem, disc, price, onAddToCart }) {
  const handleAddToCart = async () => {
    try {
      const response = await api.post('/shoppingCart', {
        productId: product.id,
      });

      console.log('Item adicionado ao carrinho:', response.data);


      if (onAddToCart) onAddToCart(response.data);
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
    }
  };

  return (
    <main className="flex-grow p-8 ">
      <div className="flex justify-center">
        <div className="bg-gradient-to-b from-violet-400 to-violet-500 border border-purple-400 rounded-xl p-6 w-72 shadow-xl hover:shadow-purple-700 hover:scale-105 transition-all duration-300">
          {/* Ícones de Ações */}
          <div className="flex justify-end gap-3">
            <img
              src={AddCarrinho}
              alt="Adicionar ao carrinho"
              className="h-6 w-6 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-200"
              onClick={handleAddToCart}
            />
            <img
              src={AddFav}
              alt="Adicionar aos favoritos"
              className="h-6 w-6 cursor-pointer hover:scale-125 hover:brightness-150 transition-all duration-200"
            />
          </div>
          {/* Imagem do Produto */}
          <img
            src={imagem}
            alt="Produto"
            className="mx-auto h-48 my-4 object-contain shadow-lg hover:shadow-purple-500 transition-shadow duration-300"
          />
          {/* Descrição */}
          <p className="text-sm text-gray-300 text-center mb-2 italic tracking-wide">
            {disc || 'Descrição não disponível'}
          </p>
          {/* Preço */}
          <h2 className="text-2xl font-bold mt-2 text-white text-center">
            {price ? `${price}` : 'Preço não informado'}
          </h2>
          {/* Botão Comprar */}
          <Link to="/compras">
            <button className="bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-md py-3 mt-6 w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-800 hover:scale-105 transition-transform duration-300">
              <img
                src={ComprarIcon}
                alt="Ícone Comprar"
                className="h-5 w-5"
              />
              <span className="tracking-wide">COMPRAR</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Productcard;