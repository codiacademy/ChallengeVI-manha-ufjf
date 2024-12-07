import React from "react";

import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* Conteúdo principal */}
      <main className="flex-grow">
        <HomePage /> {/* Renderiza a página inicial ou outras páginas */}
      </main>

    </div>
  );
}

export default App;
