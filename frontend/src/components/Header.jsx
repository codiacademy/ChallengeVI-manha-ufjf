import { useState } from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  CubeIcon
} from "@heroicons/react/24/outline";
import { Link } from 'react-router-dom';
import CodiIcon from '../imagens/iconCodi.png'
import Login from "./Login";
import Register from "./Register";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const openLogin = () => {
    setIsLoginOpen(true);
    setIsRegisterOpen(false);
  };

  const openRegister = () => {
    setIsRegisterOpen(true);
    setIsLoginOpen(false);
  };

  return (
    <>
      <header className="bg-black flex items-center justify-between p-5 pl-2 text-white z-[9999]">
      <div className="flex gap-2 items-center  justify-around">
        <Link to='/' className="flex items-center">
          <img
            src={CodiIcon}
            alt="Icone do site"
            className="h-12 w-12 cursor-pointer"
          /><p >CODI <br />COMMERCE</p></Link>
          <div className="flex items-center ps-12">
          <input
              type="text"
              placeholder="Buscar produtos"
              className="border border-gray-300 rounded-l-xl p-2 h-10 w-full sm:w-[300px] md:w-[400px] lg:w-[550px] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-black  placeholder-gray-500"
              aria-label="Buscar produtos"
              />

            <button className="bg-purple-800 h-10 w-10 flex items-center justify-center rounded-r-xl">
              <MagnifyingGlassIcon className="h-5 w-5"/>
              
            </button>
          </div>
        </div>

        <div className="md:hidden flex items-center pl-4">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white " />
            )}
          </button>
        </div>

        <div
          className={`fixed top-0 right-0 h-full w-64 bg-black p-6 transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden`}
        >
          <button
            onClick={() => setMenuOpen(false)}
            aria-label="Close Menu"
            className="absolute top-4 right-4"
          >
            <XMarkIcon className="w-6 h-6 text-white" />
          </button>
          <nav className="mt-8 space-y-4">
  
            
          </nav>
          <div className="mt-8 space-y-4">
            
            <button
              onClick={() => {
                openLogin();
                setMenuOpen(false);
              }}
              className="flex items-center hover:text-gray-400"
            >
              <UserIcon className="w-6 h-6 mr-2" /> Login
            </button>
            <Link to='/showprodutos'  className="flex items-center hover:text-gray-400">
              <CubeIcon className="w-6 h-6 mr-2" />Produtos
              </Link>
            <Link to='/favorito' className="flex items-center hover:text-gray-400">
              <HeartIcon className="w-6 h-6 mr-2" /> Favoritos
              </Link>
            <Link to='/carrinho'className="flex items-center hover:text-gray-400">
              <ShoppingCartIcon className="w-6 h-6 mr-2" /> Carrinho
            </Link>
            
          </div>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
        <Link to='/showprodutos'><h1 className="cursor-pointer">PRODUTOS</h1></Link>
          <div className="flex space-x-6 items-center">
            
            <Link to='/favorito' className="flex items-center hover:text-gray-400"> 
              <HeartIcon className="w-6 h-6 mr-2" /> Favoritos
            </Link>
            <Link to="/Carrinho" className="flex items-center hover:text-gray-400">
              <ShoppingCartIcon className="w-6 h-6 mr-2" /> Carrinho
            </Link>
            <button
              onClick={openLogin}
              className="flex items-center hover:text-gray-400"
            >
              <UserIcon className="w-6 h-6 mr-2" /> Login
            </button>
          </div>
        </div>
      </header>

      <Login
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
        switchToRegister={openRegister}
      />
      <Register
        isOpen={isRegisterOpen}
        onClose={() => setIsRegisterOpen(false)}
        switchToLogin={openLogin}
      />
    </>
  );
}

export default Header;
