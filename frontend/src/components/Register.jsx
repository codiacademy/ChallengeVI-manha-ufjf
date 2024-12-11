import { useState } from "react";
import Modal from "./Modal";
import { UserIcon, LockClosedIcon, PencilSquareIcon, PhoneIcon } from "@heroicons/react/24/outline";
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../server/api';

function Register({ isOpen, onClose, switchToLogin }) {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, phone } = formData;

    try {
      const response = await api.post('/register', { firstName, lastName, email, password, phone });
      if (response.status === 201) {
        toast.success('Usuário cadastrado com sucesso!',);
        onClose();
      }
    } catch (error) {
      toast.error('Erro ao cadastrar usuário!');
    }
  };

  return (
    <>

      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          Registre-se
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo para Primeiro Nome */}
          <div className="relative flex items-center">
            <PencilSquareIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              name="firstName"
              type="text"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Digite seu primeiro nome"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
            />
          </div>
          {/* Campo para Último Nome */}
          <div className="relative flex items-center">
            <PencilSquareIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              name="lastName"
              type="text"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Digite seu último nome"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
            />
          </div>
          {/* Campo para Telefone */}
          <div className="relative flex items-center">
            <PhoneIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              name="phone"
              type="text"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+55 32 99999-9999 (Opcional)"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
              pattern="\+?[0-9\s\-]*"
            />
          </div>
          {/* Campo para Email */}
          <div className="relative flex items-center">
            <UserIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Digite seu email"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
            />
          </div>
          {/* Campo para Senha */}
          <div className="relative flex items-center">
            <LockClosedIcon className="absolute left-3 h-6 w-6 text-pink-500" />
            <input
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Crie uma senha"
              className="w-full pl-10 pr-4 py-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-600 transition-shadow duration-300"
            />
          </div>
          {/* Botão de Registro */}
          <button className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-800 to-purple-900 rounded-lg shadow-lg hover:scale-105 transform transition-transform duration-300">
            Registrar
          </button>
        </form>
        <p className="text-center text-sm text-gray-400 mt-4">
          Já tem uma conta?{" "}
          <button
            onClick={switchToLogin}
            className="text-violet-500 hover:underline"
          >
            Faça login
          </button>
        </p>
      </Modal>
      
    </>
  );
}

export default Register;
