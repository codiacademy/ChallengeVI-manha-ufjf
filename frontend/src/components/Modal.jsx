import React from 'react';

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]"
      style={{ backdropFilter: 'blur(5px)' }}
    >
      <div 
        className="bg-gradient-to-r from-violet-800 to-violet-900 w-full max-w-md p-6 rounded shadow-lg relative mx-4 sm:mx-6"
      >
        <button 
          onClick={onClose} 
          className="absolute top-2 right-2 text-white hover:text-gray-300 text-2xl font-bold"
        >
          ×
        </button>
        {children}
      </div>
    </div>
  );
}

export default Modal;
