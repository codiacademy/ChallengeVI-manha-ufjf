import React, { useState, useEffect } from 'react'; 
import AddCarrinho from '../imagens/imageAddCarrinho.png';
import AddFav from '../imagens/imageAddFav.png';
import ComprarIcon from '../imagens/imageBotaoComprar.png';
import api from '../server/api';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';

function ShowProdutos() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products');
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error('Erro ao buscar produtos:', error);
      }
    };
    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    setCategory(category);
    if (category === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === category));
    }
  };

  return (
    <div className='bg-gradient-to-b from-violet-100 to-violet-300'>
      <Header />
      {/* Mini NavBar de Filtro */}
      <nav className="flex flex-wrap justify-center gap-4 p-4 bg-gray-800 text-white">
        <button onClick={() => handleFilter('')} className={`px-4 py-2 ${category === '' ? 'bg-purple-600' : 'bg-gray-700'} rounded mb-2 sm:mb-0 sm:px-6 sm:py-3`}>
          Todos
        </button>
        <button onClick={() => handleFilter('monitors')} className={`px-4 py-2 ${category === 'monitors' ? 'bg-purple-600' : 'bg-gray-700'} rounded mb-2 sm:mb-0 sm:px-6 sm:py-3`}>
          Monitores
        </button>
        <button onClick={() => handleFilter('keyboard')} className={`px-4 py-2 ${category === 'keyboard' ? 'bg-purple-600' : 'bg-gray-700'} rounded mb-2 sm:mb-0 sm:px-6 sm:py-3`}>
          Teclados
        </button>
        <button onClick={() => handleFilter('mouse')} className={`px-4 py-2 ${category === 'mouse' ? 'bg-purple-600' : 'bg-gray-700'} rounded mb-2 sm:mb-0 sm:px-6 sm:py-3`}>
          Mouses
        </button>
        <button onClick={() => handleFilter('computer')} className={`px-4 py-2 ${category === 'computer' ? 'bg-purple-600' : 'bg-gray-700'} rounded mb-2 sm:mb-0 sm:px-6 sm:py-3`}>
          Computadores
        </button>
        <button onClick={() => handleFilter('headset')} className={`px-4 py-2 ${category === 'headset' ? 'bg-purple-600' : 'bg-gray-700'} rounded mb-2 sm:mb-0 sm:px-6 sm:py-3`}>
          Headsets
        </button>
      </nav>

      {/* Produtos Filtrados */}
      <div className="flex flex-wrap gap-4 justify-center p-6">
        {filteredProducts.map(product => (
          <Productcard
            key={product.id}
            product={product}
            imagem={product.imageURL}
            disc={product.description}
            price={`R$ ${product.price.toFixed(2)}`}
            onAddToCart={(item) => console.log("Item adicionado ao carrinho:", item)}
            onAddToFav={(item) => console.log("Item adicionado aos favoritos:", item)}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

function Productcard({ product, imagem, disc, price, onAddToCart, onAddToFav }) {
  const handleAddToCart = async () => {
    

    const shoppingData = {
      productId: product.id,
      isShoppingCart: true, // Indicating the item is added to the shopping cart
    };

    try {
      const response = await api.post('/shoppingCart', shoppingData);

      console.log('Item adicionado ao carrinho:', response.data);
      toast.success('Item adicionado ao carrinho');

      if (onAddToCart) {
        onAddToCart(response.data);
      }
    } catch (error) {
      console.error('Erro ao adicionar item ao carrinho:', error);
      toast.error('Erro ao adicionar item ao carrinho');
    }
  };

  const handleAddToFav = async () => {
    

    const favData = {
      productId: product.id,
      isFavorite: true, // Indicating the item is added to the shopping cart
    };

    try {
      const response = await api.post('/favorites', favData);

      console.log('Item adicionado ao favorito:', response.data);
      toast.success('Item adicionado ao favorito:');

      if (onAddToFav) {
        onAddToFav(response.data);
      }
    } catch (error) {
      console.error('Erro ao adicionar item aos Favoritos:', error);
      toast.error('Erro ao adicionar item aos Favoritos');
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
              onClick={handleAddToFav}
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
          <Link
              to="/compras"
              state={{ product }}
            >
              <button className="bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-md py-3 mt-6 w-full flex items-center justify-center gap-2 shadow-lg hover:shadow-purple-800 hover:scale-105 transition-transform duration-300">
                <img
                  src={ComprarIcon}
                  alt="Ícone Comprar"
                  className="h-5 w-5"
                />
                <span className="tracking-wide">VER INFORMAÇÕES</span>
              </button>
            </Link>
        </div>
      </div>
    </main>
  );
}

export default ShowProdutos;
