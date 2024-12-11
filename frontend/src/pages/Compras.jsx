import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { ProductImage, ProductPrice, ProductButton } from '../components/ProductComponents';

function Compras() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const { product } = location.state || {};
    if (!product || !product.imageURL || !product.price || !product.description) {
      setError(true);
      setLoading(false);
      navigate('/');
    } else {
      setProduct(product);
      setLoading(false);
    }
  }, [location.state, navigate]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-violet-100 to-violet-300">
        <p className="text-white font-semibold text-lg">Carregando...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-violet-100 to-violet-300">
        <p className="text-red-500 font-semibold text-lg">Erro: Produto inválido ou não encontrado. Redirecionando...</p>
      </div>
    );
  }

  const handleCompraClick = () => {
    navigate('/checkout', {
      state: {
        product,
        quantity: 1,
      },
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-violet-100 to-violet-300">
      <Header />
      <main className="flex-grow p-8">
        <div className="bg-gradient-to-b from-violet-400 to-violet-500 border-2 border-purple-300 rounded-xl p-6 w-full sm:w-4/5 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h1 className="text-4xl font-bold text-white text-center mb-8 tracking-wide">{product.name}</h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <ProductImage imageURL={product.imageURL} altText={product.name} className="w-full sm:w-1/2 h-auto rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300" />
            <div className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-6">
              <ProductPrice price={product.price} className="text-xl text-white font-semibold" />
              <ProductButton 
                label="COMPRAR AGORA" 
                onClick={handleCompraClick} 
                className="bg-purple-600 text-white py-2 px-8 rounded-lg shadow-md hover:bg-purple-700 transition-colors duration-200"
              />
            </div>
          </div>
          <div className="mt-12 text-center text-white">
            <p className="text-lg leading-relaxed max-w-3xl mx-auto">
              <strong className="text-xl">Sobre este produto:</strong> 
              <span className="font-light">{product.description}</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Compras;
