import React, { useState, useEffect } from "react";
import Productcard from "../components/Productcard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../server/api";
import { TrashIcon } from "@heroicons/react/24/outline";

const Carrinho = () => {
  const [produtos, setProdutos] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get('/products');
        setItensCarrinho(response.data);
      } catch (error) {
        console.error('Erro ao carregar o carrinho', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setItensCarrinho(itensCarrinho.filter(item => item.id !== id));
    } catch (error) {
      console.error('Erro ao remover o item do carrinho', error);
    }
  };

  const aumentarQuantidade = (index) => {
    const newItens = [...itensCarrinho];
    newItens[index].quantidade += 1;
    setItensCarrinho(newItens);
  };

  const diminuirQuantidade = (index) => {
    const newItens = [...itensCarrinho];
    if (newItens[index].quantidade > 1) {
      newItens[index].quantidade -= 1;
    }
    setItensCarrinho(newItens);
  };

  const calcularTotal = () => {
    return itensCarrinho.reduce(
      (total, item) => total + item.price * item.quantidade,
      0
    );
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-gradient-to-t from-gray-400 via-gray-300 to-gray-200 text-black min-h-screen">
        <h1 className="text-4xl font-bold mt-8 mb-6 tracking-wide">CARRINHO DE COMPRAS</h1>

        {/* Itens no carrinho */}
        <section className="w-full max-w-5xl mt-8 bg-gradient-to-r from-purple-600 to-violet-400 rounded-lg shadow-lg p-6">
          {/* Cabeçalhos das colunas */}
          <div className="flex justify-between items-center border-b pb-4">
            <p className="text-lg font-semibold w-1/3 text-black">Itens</p>
            <p className="text-lg font-semibold w-1/3 text-black">Descrição</p>
            <p className="text-lg font-semibold w-1/3 text-black">Preço</p>
          </div>

          {/* Itens do carrinho */}
          {itensCarrinho.map((item, index) => (
            <div key={index} className="flex justify-between items-center py-4 border-b last:border-none ">
              <div className="w-1/3">
                <img src='data:image/jpeg;base64,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' alt={item.name} className="h-16 w-16 rounded-lg shadow-md hover:shadow-purple-800 transition-shadow duration-300" />
              </div>
              <div className="w-1/3">
                <p className="text-sm text-black">{item.description}</p>
                <p className="text-xs text-black">Em estoque</p>
              </div>
              <div className="w-1/3 flex items-center justify-between">
                <button onClick={() => handleRemoveFromCart(item.id)} className="hover:text-red-500 transition-colors">
                  <TrashIcon className="w-6 h-6" />
                </button>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => diminuirQuantidade(index)}
                    className="bg-purple-800 text-white px-3 rounded-md hover:bg-purple-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg">{item.quantidade}</span>
                  <button
                    onClick={() => aumentarQuantidade(index)}
                    className="bg-purple-800 text-white px-3 rounded-md hover:bg-purple-600 transition-colors"
                  >
                    +
                  </button>
                </div>
                <p className="text-lg font-semibold text-black">{`R$${(item.price * item.quantidade).toFixed(2)}`}</p>
              </div>
            </div>
          ))}
        </section>

        {/* Resumo e ações */}
        <div className="w-full max-w-5xl mt-8 bg-gradient-to-r from-purple-600 to-violet-400 rounded-lg p-6 shadow-lg flex justify-between items-center">
          <p className="text-2xl font-semibold">Total: R${calcularTotal().toFixed(2)}</p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform">
              Fechar Pedido
            </button>
            <button className="bg-gray-300 text-gray-900 py-2 px-6 rounded-lg shadow hover:scale-105 transition-transform">
              Adicionar Mais Itens
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Carrinho;
