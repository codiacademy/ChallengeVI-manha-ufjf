function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-gradient-to-r from-violet-800 to-violet-900 w-96 p-6 rounded shadow-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-btnPink hover:text-gray-700">
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
