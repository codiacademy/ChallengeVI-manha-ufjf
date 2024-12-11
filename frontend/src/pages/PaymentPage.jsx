import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePayment = () => {
    if (!paymentMethod) {
      toast.error('Por favor, selecione um método de pagamento.');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      toast.success('Pagamento realizado com sucesso!');
      setIsProcessing(false);
    }, 2000);
  };

  return (
    <div className="bg-gradient-to-b from-violet-100 to-violet-300 min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow p-8 flex flex-col items-center">
        <h1 className="text-3xl font-bold text-purple-900 mb-6">Pagamento</h1>

        <div className="bg-gradient-to-b from-violet-400 to-violet-500 border border-purple-400 rounded-xl p-6 w-96 shadow-xl">
          <h2 className="text-xl font-semibold text-white mb-4">Selecione o método de pagamento:</h2>

          <div className="space-y-4">
            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="creditCard"
                checked={paymentMethod === 'creditCard'}
                onChange={() => setPaymentMethod('creditCard')}
                className="form-radio h-5 w-5 text-purple-700"
              />
              <span className="text-white">Cartão de Crédito</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="debitCard"
                checked={paymentMethod === 'debitCard'}
                onChange={() => setPaymentMethod('debitCard')}
                className="form-radio h-5 w-5 text-purple-700"
              />
              <span className="text-white">Cartão de Débito</span>
            </label>

            <label className="flex items-center gap-3">
              <input
                type="radio"
                name="paymentMethod"
                value="pix"
                checked={paymentMethod === 'pix'}
                onChange={() => setPaymentMethod('pix')}
                className="form-radio h-5 w-5 text-purple-700"
              />
              <span className="text-white">PIX</span>
            </label>
          </div>

          <button
            onClick={handlePayment}
            disabled={isProcessing}
            className={`mt-6 bg-gradient-to-br from-purple-900 to-purple-700 text-white rounded-md py-3 w-full shadow-lg hover:shadow-purple-800 transition-transform duration-300 ${isProcessing ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}`}
          >
            {isProcessing ? 'Processando...' : 'Finalizar Pagamento'}
          </button>
        </div>

        <Link
          to="/produtos"
          className="mt-6 text-purple-800 hover:text-purple-600 underline"
        >
          Voltar para os Produtos
        </Link>
      </main>

      <Footer />

      
    </div>
  );
}

export default PaymentPage;
