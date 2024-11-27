import React from "react";
import Header from "./components/Header"; // Importa o Header
import Footer from "./components/Footer"; // Caso tenha um Footer
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Cabeçalho */}
      <Header />
      
      {/* Conteúdo principal */}
      <main className="flex-grow">
        <HomePage /> {/* Renderiza a página inicial ou outras páginas */}
      </main>
      
      {/* Rodapé (opcional) */}
      <Footer />
    </div>
  );
}

export default App;
