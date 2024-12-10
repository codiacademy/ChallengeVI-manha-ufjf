// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// function ShowProdutos() {
//   return (
//     <>
//       <Header />
//       <div className="flex-1 bg-white">
//         {/* Título do Produto */}
//         <div className="h-1/5 flex items-center justify-center rounded-t-xl">
//           <h1 className="text-4xl font-light text-center text-white">
//             Teclado Mecânico RedDragon, Preto, entrada USB, 1500DPI
//           </h1>
//         </div>

//         {/* Imagem e Informações do Produto */}
        
//         <div className="flex p-8 md:flex-row flex-col items-center md:items-start ">
//           <img
//             className="h-72 w-72 object-cover shadow-lg border-2 border-violet-300 hover:shadow-purple-400 transition-shadow duration-300"
//             src="imagens/imageProdutoTeclado01.png"
//             alt="Teclado Mecânico RedDragon, Preto, entrada USB, 1500DPI"
//           />
//           <div className="flex flex-col items-center md:items-start justify-center mt-6 md:ml-12 space-y-6">
//             <h2 className="text-4xl font-bold text-gray-800">R$499,90</h2>
//             <p className="font-semibold text-lg text-gray-700">Em até 10x R$49,99 sem juros</p>
//             <p className="text-[#21830D] font-semibold text-lg">Em estoque</p>
//             <button 
//               className="bg-gradient-to-br from-purple-900 to-purple-700 text-white w-full md:w-72 h-12 text-lg font-bold rounded-lg shadow-md hover:bg-[#19276e] transition duration-300"
//               aria-label="Adicionar Teclado Mecânico RedDragon ao carrinho"
//             >
//               ADICIONAR AO CARRINHO
//             </button>
//           </div>
//         </div>

//         {/* Descrição do Produto */}
//         <div className="flex justify-center mt-16 px-4">
//           <p className="text-lg md:text-xl text-center text-gray-700">
//             <span className="font-semibold text-gray-800">Sobre este produto:</span> Informações adicionais sobre o produto.
//           </p>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default ShowProdutos;

// import React from 'react';
// import Header from '../components/Header';
// import Footer from '../components/Footer';

// function ShowProdutos() {
//   return (
//     <>
//       <Header />
//       <main className="flex-grow p-8 bg-gradient-to-b from-violet-100 to-violet-300">
//         <div className="bg-gradient-to-b from-violet-400 to-violet-500 border border-purple-300 rounded-xl p-6 w-4/5 mx-auto shadow-lg hover:shadow-xl transition-shadow duration-300">
//           {/* Título e Descrição do Produto */}
//           <h1 className="text-3xl font-bold text-white text-center mb-8">Detalhes do Produto</h1>

//           {/* Imagem e Detalhes */}
//           <div className="flex flex-wrap p-8 items-center justify-center gap-8">
//             <img
//               className="h-80 w-80 object-contain mx-auto rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
//               src="imagens/imageProdutoTeclado01.png"
//               alt="Produto"
//             />
//             <div className="flex flex-col items-center justify-center">
//               <h2 className="text-4xl font-semibold text-white mb-4">R$499,90</h2>
//               <p className="font-medium text-lg text-white mb-4">Em até 10x R$49,99 sem juros</p>
//               <p className="text-[#21830D] font-bold mb-6">Disponível em estoque</p>
//               <button className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-3 px-8 rounded-lg flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300">
//                 ADICIONAR AO CARRINHO
//               </button>
//             </div>
//           </div>

//           {/* Descrição Adicional */}
//           <div className="mt-12 text-center text-white">
//             <p className="text-lg">
//               <strong>Sobre este produto:</strong>{" "}
//               <span className="font-light">Informações adicionais sobre o produto.</span>
//             </p>
//           </div>
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default ShowProdutos;

// export default ShowProdutos;

import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Card from '../components/Card'
function ShowProdutos() {
  return (
    <>
      <Header />
      <div className='bg-red-700 w-[500px] h-[50px]'>Monitor</div>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>

      <Footer />
    </>
  );
}

export default ShowProdutos;