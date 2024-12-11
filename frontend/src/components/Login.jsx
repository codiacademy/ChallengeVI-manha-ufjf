import Modal from "./Modal";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../server/api';
import { useState } from 'react';

function Login({ isOpen, onClose, switchToRegister }) {
  const [logData, setLogData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLogData({ ...logData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = logData;

    if (!email || !password) {
      toast.error('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await api.post('/login', { email, password });
      if (response.status === 200) {
        toast.success("usuario logado");
        onClose();
      }
    } catch (error) {
      toast.error('Erro ao fazer login');
    }
  };

  return (
    <>
      
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Login
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo de Email */}
          <div className="relative flex items-center">
            <UserIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              type="email"
              aria-label="Email"
              placeholder="Digite seu email"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900  text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
              value={logData.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          {/* Campo de Senha */}
          <div className="relative flex items-center">
            <LockClosedIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              type="password"
              aria-label="Senha"
              placeholder="Digite sua senha"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900  text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
              value={logData.password}
              onChange={handleChange}
              name="password"
            />
          </div>

          {/* Botão de Login */}
          <button
            type="submit"
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-800 to-purple-900 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300"
          >
            Entrar
          </button>
        </form>

        {/* Link para Registro */}
        <p className="text-center text-sm text-gray-400 mt-4">
          Não tem uma conta?{" "}
          <button
            onClick={switchToRegister}
            className="text-violet-500 hover:underline"
          >
            Registre-se já
          </button>
        </p>
      </Modal>
    </>
  );
}

export default Login;
