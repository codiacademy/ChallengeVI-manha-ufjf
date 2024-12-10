// import Modal from "./Modal";
// import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css'
// import api from '../server/api'
// import { useState } from 'react';

// function Login({ isOpen, onClose, switchToRegister }) {
//   const [logData, setLogData] = useState({ email: "", password: "" });
//   // const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLogData({ ...logData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const { email, password } = logData;

//     if (!email || !password) {
//       toast.error('Por favor, preencha todos os campos.');
//       return;
//     }

//     // setLoading(true);
//     try {
//       const response = await api.post('/login', { email, password });
//       // setLoading(false);
      
//       if (response.status === 200) {
//         toast.success('Usuario logado com sucesso!', {
//           position: "bottom-right",
//           autoClose: 5000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "light",
//           });
//         onClose();
//       }
//     } catch (error) {
//       // setLoading(false);
//       toast.error('Erro ao fazer login', {
//         position: "bottom-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "light",
//         });;
//     }
//   };

//   return (
//     <> 
//       <ToastContainer
//        position="bottom-right"
//        autoClose={5000}
//        hideProgressBar={false}
//        newestOnTop={false}
//        closeOnClick
//        rtl={false}
//        pauseOnFocusLoss
//        draggable
//        pauseOnHover
//        theme="light" />
       
//       <Modal isOpen={isOpen} onClose={onClose}>
//         <h2 className="text-2xl font-bold mb-4 text-btnPink">Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4 flex items-center border-b border-btnPink">
//             <UserIcon className="h-5 w-5 text-btnPink mr-2" />
//             <label className="block text-btnPink">Email</label>
//             <input
//               type="email"
//               aria-label="Email"
//               placeholder="Digite seu email"
//               className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
//               value={logData.email}
//               onChange={handleChange}
//               name="email"
//             />
//           </div>
//           <div className="mb-4 flex items-center border-b border-btnPink">
//             <LockClosedIcon className="h-5 w-5 text-btnPink mr-2" />
//             <label className="block text-btnPink">Senha</label>
//             <input
//               type="password"
//               aria-label="Senha"
//               placeholder="Digite sua senha"
//               className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
//               value={logData.password}
//               onChange={handleChange}
//               name="password"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-btnPink text-white py-2 rounded hover:bg-purple-600"
//             // disabled={loading}
//           >Entrar
//             {/* {loading ? 'Carregando...' : 'Entrar'} */}
//           </button>
//         </form>
//         <p className="text-sm text-center mt-4 text-btnPink">
//           Não tem uma conta?{" "}
//           <button onClick={switchToRegister} className="text-btnPink hover:underline">
//             Registre-se já
//           </button>
//         </p>
//       </Modal>
    
//     </>
//   );
// }

// export default Login;


import Modal from "./Modal";
import { UserIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { ToastContainer, toast } from 'react-toastify';
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
      const response = await api.get('/user', { email, password });
      if (response.status === 200) {
        toast.success('Usuário logado com sucesso!', {
          position: "bottom-right",
          autoClose: 5000,
          theme: "dark",
        });
        onClose();
      }
    } catch (error) {
      toast.error('Erro ao fazer login', {
        position: "bottom-right",
        autoClose: 5000,
        theme: "dark",
      });
    }
  };

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="dark"
      />
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