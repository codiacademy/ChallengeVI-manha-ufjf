import Modal from "./Modal";
import { 
  UserIcon, 
  LockClosedIcon 
} from "@heroicons/react/24/outline";

function Login({ isOpen, onClose, switchToRegister }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4 text-btnPink">Login</h2>
      <form>
        <div className="mb-4 flex items-center border-b border-btnPink">
          <UserIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink">Email</label>
          <input
            type="email"
            placeholder="Digite seu email"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-4 flex items-center border-b border-btnPink">
          <LockClosedIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink">Senha</label>
          <input
            type="password"
            placeholder="Digite sua senha"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        <button className="w-full bg-btnPink text-white py-2 rounded hover:bg-purple-600">
          Entrar
        </button>
      </form>
      <p className="text-sm text-center mt-4 text-btnPink">
        Não tem uma conta?{" "}
        <button onClick={switchToRegister} className="text-btnPink hover:underline">
          Registre-se já
        </button>
      </p>
    </Modal>
  );
}

export default Login;