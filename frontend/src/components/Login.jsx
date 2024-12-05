import Modal from "./Modal";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import api from '../server/api'
import { useState } from 'react';

function Login({ isOpen, onClose, switchToRegister }) {
  const [logData, setLogData] = useState({ email: "", password: "" });
  // const [loading, setLoading] = useState(false);

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

    // setLoading(true);
    try {
      const response = await api.get('/user', { email, password });
      // setLoading(false);
      
      if (response.status === 200) {
        toast.success('Usuario logado com sucesso!', {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
        onClose();
      }
    } catch (error) {
      // setLoading(false);
      toast.error('Erro ao fazer login', {
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

  return (
    <> 
      <ToastContainer />
      <Modal isOpen={isOpen} onClose={onClose}>
        <h2 className="text-2xl font-bold mb-4 text-btnPink">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border-b border-btnPink">
            <UserIcon className="h-5 w-5 text-btnPink mr-2" />
            <label className="block text-btnPink">Email</label>
            <input
              type="email"
              aria-label="Email"
              placeholder="Digite seu email"
              className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
              value={logData.email}
              onChange={handleChange}
              name="email"
            />
          </div>
          <div className="mb-4 flex items-center border-b border-btnPink">
            <LockClosedIcon className="h-5 w-5 text-btnPink mr-2" />
            <label className="block text-btnPink">Senha</label>
            <input
              type="password"
              aria-label="Senha"
              placeholder="Digite sua senha"
              className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
              value={logData.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-btnPink text-white py-2 rounded hover:bg-purple-600"
            // disabled={loading}
          >Entrar
            {/* {loading ? 'Carregando...' : 'Entrar'} */}
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-btnPink">
          Não tem uma conta?{" "}
          <button onClick={switchToRegister} className="text-btnPink hover:underline">
            Registre-se já
          </button>
        </p>
      </Modal>
    
    </>
  );
}

export default Login;
