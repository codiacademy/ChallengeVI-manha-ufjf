import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Carrinho from "./pages/Carrinho";
import AboutUs from "./pages/AboutUs";
import Compras from "./pages/Compras";
import ShowProdutos from "./pages/ShowProdutos";
import Checkout from "./pages/Checkout";
import Favorito from "./pages/Favorito";
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/carrinho'element={<Carrinho/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
        <Route path='/compras'element={<Compras/>}/>
        <Route path='/showprodutos'element={<ShowProdutos/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/favorito'element={<Favorito/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
