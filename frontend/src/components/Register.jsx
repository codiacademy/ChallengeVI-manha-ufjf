import { useState } from "react"; // Importa o hook useState para gerenciar o estado local do componente
import Modal from "./Modal"; // Importa o componente Modal personalizado
import { UserIcon, LockClosedIcon, PencilSquareIcon, PhoneIcon } from "@heroicons/react/24/outline";  // Importa ícones da biblioteca Heroicons para melhorar a interface visual
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../server/api'

// Função principal do componente Register
function Register({ isOpen, onClose, switchToLogin }) {
  // Estado local para armazenar os dados do formulário
  const [formData, setFormData] = useState({
    firstName: "", // Nome do usuário
    lastName: "",  // Sobrenome do usuário
    email: "",     // Email do usuário
    password: "",  // Senha do usuário
    phone: "",     // Telefone do usuário (opcional)
  });

  // Função para atualizar o estado com base na entrada do usuário
  const handleChange = (e) => {
    const { name, value } = e.target; // Extrai o nome e valor do campo alterado
    setFormData({ ...formData, [name]: value }); // Atualiza apenas o campo correspondente no estado
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão de recarregar a página
    const {
      firstName, // Nome do usuário
      lastName,  // Sobrenome do usuário
      email,  // Email do usuário
      password, // Senha do usuário
      phone 
    } = formData

    try {
      // Envia uma requisição POST para o backend
      const response = await api.post('/register', {
        firstName, // Nome do usuário
        lastName,  // Sobrenome do usuário
        email,  // Email do usuário
        password, // Senha do usuário
        phone 
      })

       // Verifica a resposta da API
       if (response.status === 201) {
        // Sucesso, pode exibir uma mensagem ou redirecionar
        
        toast.success('Usuario cadastrado com sucesso!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
         
          });
        onClose(); // Fecha o modal após o registro bem-sucedido
      }
    } catch (error) {
      // Em caso de erro, exibe uma mensagem de erro
      console.error('Erro no registro:', error);
      toast.error('Erro ao cadastrar usuário!', {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });;
    }
  };

  // Retorna a estrutura do modal contendo o formulário
  return (
    <>
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
     
    />
    <Modal isOpen={isOpen} onClose={onClose}>
      {/* Título do formulário */}
      <h2 className="text-2xl font-bold mb-4 text-btnPink">Registre-se</h2>
      
      {/* Início do formulário */}
      <form onSubmit={handleSubmit}>
        
        {/* Campo para Primeiro Nome */}
        <div className="mb-4 flex items-center border-b border-btnPink">
          <PencilSquareIcon className="h-5 w-5 text-btnPink mr-2" /> {/* Ícone */}
          <label className="block text-btnPink">Primeiro Nome</label>
          <input
            name="firstName" // Nome do campo que será usado em handleChange
            type="text" // Tipo de entrada
            value={formData.firstName} // Valor atual do campo no estado
            onChange={handleChange} // Função chamada ao alterar o valor
            placeholder="Digite seu primeiro nome" // Texto exibido como placeholder
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        
        {/* Campo para Último Nome */}
        <div className="mb-4 flex items-center border-b border-btnPink">
          <PencilSquareIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink">Último Nome</label>
          <input
            name="lastName"
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Digite seu último nome"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        
        {/* Campo para Telefone */}
        <div className="mb-4 flex items-center border-b border-btnPink">
          <PhoneIcon className="h-5 w-5 text-btnPink mr-2" />
          <label htmlFor="phone" className="block text-btnPink">
            Telefone
          </label>
          <input
            name="phone"
            type="text"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+55 32 99999-9999 (Opcional)"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
            pattern="\+?[0-9\s\-]*" // Validação para formatos de telefone
          />
        </div>
        
        {/* Campo para Email */}
        <div className="mb-4 flex items-center border-b border-btnPink">
          <UserIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink">Email</label>
          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Digite seu email"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        
        {/* Campo para Senha */}
        <div className="mb-4 flex items-center border-b border-btnPink">
          <LockClosedIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink">Senha</label>
          <input
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Crie uma senha"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        
        {/* Botão de envio */}
        <button className="w-full bg-btnPink text-white py-2 rounded hover:bg-purple-600">
          Registrar
        </button>
      </form>
      
      {/* Link para alternar para o login */}
      <p className="text-sm text-center mt-4 text-btnPink">
        Já tem uma conta?{" "}
        <button onClick={switchToLogin} className="text-btnPink hover:underline">
          Faça login
        </button>
      </p>
    </Modal></>
  );
}


export default Register; // Exporta o componente para ser usado em outros lugares
