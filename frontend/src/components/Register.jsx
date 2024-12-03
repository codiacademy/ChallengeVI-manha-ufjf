import Modal from "./Modal";
import { UserIcon, LockClosedIcon, PencilSquareIcon, PhoneIcon } from "@heroicons/react/24/outline";

function Register({ isOpen, onClose, switchToLogin }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold mb-4 text-btnPink">Registre-se</h2>
      <form>
        <div className="mb-4 flex items-center border-b border-btnPink">
          <PencilSquareIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink ">Primeiro Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-4 flex items-center border-b border-btnPink">
          <PencilSquareIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink ">Ultimo Nome</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        <div className="mb-4 flex items-center border-b border-btnPink">
          <PhoneIcon className="h-5 w-5 text-btnPink mr-2" />
          <label className="block text-btnPink ">Telefone</label>
          <input
            type="text"
            placeholder="Digite seu nome"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
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
            placeholder="Crie uma senha"
            className="w-full px-3 py-2 bg-transparent text-white focus:outline-none"
          />
        </div>
        <button className="w-full bg-btnPink text-white py-2 rounded hover:bg-purple-600">
          Registrar
        </button>
      </form>
      <p className="text-sm text-center mt-4 text-btnPink">
        Já tem uma conta?{" "}
        <button onClick={switchToLogin} className="text-btnPink hover:underline">
          Faça login
        </button>
      </p>
    </Modal>
  );
}

export default Register;
