import React, { useEffect, useState } from 'react';
import api from '../server/api';
import Productcard from '../components/Productcard';

function Card() {
  const [products, setProducts] = useState([]);

  // Função para buscar os produtos da API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products'); 
        setProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="flex flex-wrap gap-4 justify-center p-6">
      {products.map((product) => (
        <Productcard
          key={product.id}
          imagem={product.imageURL}
          disc={product.description}
          price={`R$ ${product.price.toFixed(2)}`}
        />
      ))}
    </div>
  );
}

export default Card;
