import React, { useState, useEffect } from "react";
import Productcard from "../components/Productcard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import api from "../server/api";
import { TrashIcon } from "@heroicons/react/24/outline";

const Carrinho = () => {
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Carregar itens do carrinho
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await api.get("/products");
        setItensCarrinho(
          response.data.map((item) => ({
            ...item,
            quantidade: item.quantidade || 1,
          }))
        );
        setError(null);
      } catch (error) {
        setError("Erro ao carregar o carrinho. Tente novamente mais tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // Função para remover item
  const handleRemoveFromCart = async (id) => {
    try {
      await api.delete(`/products/${id}`);
      setItensCarrinho(itensCarrinho.filter((item) => item.id !== id));
    } catch (error) {
      setError("Erro ao remover o item do carrinho.");
    }
  };

  // Função para alterar quantidade
  const alterarQuantidade = (id, delta) => {
    setItensCarrinho((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantidade: Math.max(1, item.quantidade + delta) }
          : item
      )
    );
  };

  // Calcular total
  const calcularTotal = () => {
    return itensCarrinho
      .reduce((total, item) => total + item.price * item.quantidade, 0)
      .toFixed(2);
  };

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg animate-pulse">Carregando...</p>
      </div>
    );

  if (error)
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg text-red-500">{error}</p>
      </div>
    );

    
  return (
    <>
      <Header />
      <div className="flex flex-col items-center bg-gradient-to-b from-violet-100 to-violet-300 text-black min-h-screen">
        <h1 className="text-4xl font-bold mt-8 mb-6 tracking-wide">CARRINHO DE COMPRAS</h1>

        {/* Itens no carrinho */}
        <section className="w-full max-w-5xl mt-8 bg-gradient-to-r from-purple-600 to-violet-400 rounded-lg shadow-lg p-6">
          {/* Cabeçalhos das colunas */}
          <div className="hidden md:flex justify-between items-center border-b pb-4">
                <p className="font-semibold w-1/4">Produto</p>
                <p className="font-semibold w-1/2">Descrição</p>
                <p className="font-semibold w-1/6 text-center">Quantidade</p>
                <p className="font-semibold w-1/6 text-center">Preço</p>
          </div>

          {/* Itens do carrinho */}
          {itensCarrinho.map((item, index) => (
            <div key={index} className="flex flex-col md:flex-row justify-between items-center py-4 border-b last:border-none ">
              <div className="w-full md:w-1/4 flex justify-center md:justify-start">
                <img src={item.image} alt={item.name} className="h-16 w-16 rounded-lg shadow-md hover:shadow-purple-800 transition-shadow duration-300" />
              </div>
              <div className="w-full md:w-1/2 text-center md:text-left mt-4 md:mt-0">
                <p className="text-sm text-black">{item.description}</p>
                
              </div>
              <div className="w-full md:w-1/6 flex items-center justify-center gap-4 mt-4 md:mt-0 pl-7">

                  <button
                    onClick={() => alterarQuantidade(item.id, -1)}
                    className="bg-purple-800 text-white px-2 py-1 rounded-lg  hover:bg-purple-600 transition-colors"
                  >
                    -
                  </button>
                  <span className="text-lg ">{item.quantidade}</span>
                  <button
                    onClick={() => alterarQuantidade(item.id, 1)}
                    className="bg-purple-800 text-white px-2 py-1 rounded-lg  hover:bg-purple-600 transition-colors "
                  >
                    +
                  </button>
                </div>
                <div className="w-full md:w-1/6 flex items-center justify-between md:justify-end gap-4 mt-4 md:mt-0 ">
                <button onClick={() => handleRemoveFromCart(item.id)} className="hover:text-red-500 transition-colors pr-6">
                  <TrashIcon className="w-6 h-6" />
                </button>
                <p className="text-lg font-semibold text-black pr-5">{`R$${(item.price * item.quantidade).toFixed(2)}`}</p>
                </div>
                </div>
          ))}
        </section>

        {/* Resumo e ações */}
        <div className="w-full max-w-5xl mt-8 bg-gradient-to-r from-purple-600 to-violet-400 rounded-lg p-6 shadow-lg flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-lg font-semibold">Total: R$ {calcularTotal()}</p>
          <div className="flex gap-4">
            <button className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
              Fechar Pedido
            </button>
            <button className="bg-gray-300 text-gray-900 py-2 px-6 rounded-lg shadow-lg hover:scale-105 transition-transform">
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