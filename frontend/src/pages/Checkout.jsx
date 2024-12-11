import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProductImage } from '../components/ProductComponents';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const { product, quantity = 1 } = location.state || {};
  

  if (!product) {
    console.error('Produto inválido. Redirecionando para a página inicial.');
    navigate('/');
    return null;
  }

  const subtotal = product.price * quantity;
  const taxRate = 0.1; // 10% de imposto
  const tax = subtotal * taxRate;
  const shipping = 15.0; // Taxa de envio fixa
  const totalValue = (subtotal + tax + shipping).toFixed(2);

  return (
    <>
      <Header />
      <main className="flex-1 bg-gradient-to-b from-violet-100 to-violet-300 text-black p-4 sm:p-6">
        <div className="container mx-auto max-w-4xl">
          {/* Título */}
          <h1 className="text-2xl sm:text-4xl font-bold mb-6 text-center text-purple-800">Revisão do Pedido</h1>

          {/* Resumo dos Produtos */}
          <div className="bg-gray-600 shadow-lg rounded-lg p-4 sm:p-6">
            <table className="w-full text-left text-xs sm:text-sm md:text-base">
              <thead>
                <tr className="border-b">
                  <th className="font-semibold pb-2 text-white">Produto: {product.name}</th>
                  <th className="font-semibold pb-2 text-white">Preço Unitário</th>
                  <th className="font-semibold pb-2 text-white">Quantidade</th>
                  <th className="font-semibold pb-2 text-white">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-500">
                  <td className="py-2 flex items-center gap-2 text-white">
                    <ProductImage imageURL={product.imageURL} altText={product.name} className="w-12 h-12 sm:w-16 sm:h-16" />
                    
                  </td>
                  <td className="py-2 text-xs sm:text-base text-white">R${product.price.toFixed(2)}</td>
                  <td className="py-2 text-xs sm:text-base text-white">{quantity}</td>
                  <td className="py-2 text-xs sm:text-base text-white">R${(product.price * quantity).toFixed(2)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Resumo Financeiro */}
          <div className="bg-gradient-to-br from-purple-800 to-purple-600 rounded-lg mt-6 p-4 sm:p-6 md:p-8 text-white">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold pb-4 text-center">Resumo do Pedido</h2>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-lg pb-2 border-b border-purple-400">
              <span>Subtotal:</span>
              <span>R${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-lg pb-2 border-b border-purple-400">
              <span>Impostos (10%):</span>
              <span>R${tax.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-xs sm:text-sm md:text-lg pb-2 border-b border-purple-400">
              <span>Frete:</span>
              <span>R${shipping.toFixed(2)}</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between text-sm sm:text-lg md:text-2xl font-bold mt-4">
              <span>Total:</span>
              <span>R${totalValue}</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="flex flex-col gap-4 mt-6 sm:flex-row sm:gap-6">
            <button
              className="flex-1 p-3 sm:p-4 bg-purple-900 text-white text-sm sm:text-lg rounded-md shadow-md hover:bg-purple-700 transition duration-300"
              onClick={() => navigate('/payment', { state: { product, quantity, totalValue } })}
            >
              Ir para o Pagamento
            </button>
            <button
              className="flex-1 p-3 sm:p-4 bg-gray-200 text-black text-sm sm:text-lg rounded-md shadow-md hover:bg-gray-500 transition duration-300"
              onClick={() => navigate('/')}
            >
              Continuar Comprando
            </button>
          </div>

          {/* Informações adicionais */}
          <div className="mt-6 bg-gray-200 p-4 sm:p-6 rounded-lg shadow-md">
            <h3 className="text-base sm:text-lg md:text-2xl font-semibold mb-4">Política de Devolução</h3>
            <p className="text-xs sm:text-sm md:text-base text-gray-600">
              Se você não estiver satisfeito com sua compra, pode devolvê-la em até 30 dias. 
              Para mais informações, visite nossa página de política de devoluções.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Checkout;
