import { useState } from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
  XMarkIcon,
  ComputerDesktopIcon,
  CubeIcon,
  DevicePhoneMobileIcon,
  
} from "@heroicons/react/24/outline";

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
      <header className="bg-black flex items-center justify-between p-5 text-white">
      <div className="flex gap-8 items-center">
          <img
            src='imagens/iconCodig.png'
            alt="Icone do site"
            className="h-12 w-12 cursor-pointer"
          />
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Buscar produtos"
              className="border border-white rounded-l-md p-2 w-96 focus:outline-none"
            />
            <button className="bg-purple-800 h-8 w-10 flex items-center justify-center rounded-r-md">
              <img src="imagens/imageLupa.png" alt="Enviar" className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className=" text-white">

          {/* <img
            src="imagens/imageCarrinho.png"
            alt="imagem do carrinho"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="imagens/imageFav.png"
            alt="imagem dos favoritados"
            className="h-6 w-6 cursor-pointer"
          />
          <img
            src="imagens/iconPerfil.png"
            alt="imagem do icone de perfil"
            className="h-6 w-6 cursor-pointer"
          />*/}
        </div> 

        <div className="md:hidden flex items-center">
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle Menu">
            {menuOpen ? (
              <XMarkIcon className="w-6 h-6 text-white" />
            ) : (
              <Bars3Icon className="w-6 h-6 text-white" />
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
            <a href="#computadores" className="flex items-center hover:text-gray-400">
              <ComputerDesktopIcon className="w-6 h-6 mr-2" /> Computadores
            </a>
            <a href="#celulares" className="flex items-center hover:text-gray-400">
              <DevicePhoneMobileIcon className="w-6 h-6 mr-2" /> Celulares
            </a>
            <a href="#perifericos" className="flex items-center hover:text-gray-400">
              <CubeIcon className="w-6 h-6 mr-2" /> Periféricos
            </a>
            
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
            <a href="#favoritos" className="flex items-center hover:text-gray-400">
              <HeartIcon className="w-6 h-6 mr-2" /> Favoritos
            </a>
            <a href="#carrinho" className="flex items-center hover:text-gray-400">
              <ShoppingCartIcon className="w-6 h-6 mr-2" /> Carrinho
            </a>
          </div>
        </div>

        <div className="hidden md:flex space-x-8 items-center">
        <h1 className="cursor-pointer">PRODUTOS</h1>
          <div className="flex space-x-6 items-center">
            <button
              onClick={openLogin}
              className="flex items-center hover:text-gray-400"
            >
              <UserIcon className="w-6 h-6 mr-2" /> Login
            </button>
            <a href="#favoritos" className="flex items-center hover:text-gray-400">
              <HeartIcon className="w-6 h-6 mr-2" /> Favoritos
            </a>
            <a href="#carrinho" className="flex items-center hover:text-gray-400">
              <ShoppingCartIcon className="w-6 h-6 mr-2" /> Carrinho
            </a>
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
