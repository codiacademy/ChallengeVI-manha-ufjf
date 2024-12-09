import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Carrinho from "./pages/Carrinho";
import AboutUs from "./pages/AboutUs";
import Compras from "./pages/Compras";
import ShowProdutos from "./pages/ShowProdutos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/carrinho'element={<Carrinho/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
        <Route path='/compras'element={<Compras/>}/>
        <Route path='/showprodutos'element={<ShowProdutos/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
