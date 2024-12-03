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
      <header className="w-full px-6 py-4 bg-black text-white flex items-center justify-between">
        

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