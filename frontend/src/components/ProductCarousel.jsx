import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import api from '../server/api';
import ComprarIcon from '../imagens/imageBotaoComprar.png';
import { Link } from 'react-router-dom';

function ProductCarousel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products'); // Substitua pela URL correta do seu backend
        const randomProducts = response.data.sort(() => 0.5 - Math.random()).slice(0, 5); // Seleciona 5 produtos aleatórios
        setProducts(randomProducts);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="p-8 text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">
        Produtos em Destaque
      </h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div
            key={product.id}
            className="flex flex-col items-center p-6 bg-violet-400 text-black rounded-lg shadow-md"
          >
            <div className="w-full max-w-md overflow-hidden rounded mx-auto mb-6">
              <img
                src={product.imageURL}
                alt={product.name}
                className="w-full object-contain transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-center">{product.name}</h3>
            <p className="text-black text-center mb-4">{product.description}</p>
            <div className="text-xl font-bold text-violet-700 mb-6">
              R$ {product.price.toFixed(2)}
            </div>
            <Link to="/compras" state={{ product }}>
              <button
                className="bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-md py-3 mt-6 w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-800 hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={ComprarIcon}
                  alt="Ícone Comprar"
                  className="h-5 w-5"
                />
                <span className="tracking-wide">VER INFORMAÇÕES</span>
              </button>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default ProductCarousel;