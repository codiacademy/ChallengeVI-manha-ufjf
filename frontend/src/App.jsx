import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage"
import Carrinho from "./pages/Carrinho";
import AboutUs from "./pages/AboutUs";
import Compras from "./pages/Compras";
import ShowProdutos from "./pages/ShowProdutos";
import Checkout from "./pages/Checkout";
import Favorito from "./pages/Favorito";
import PaymentPage from "./pages/PaymentPage";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path='/'element={<HomePage/>}/>
        <Route path='/carrinho'element={<Carrinho/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>
        <Route path='/compras'element={<Compras/>}/>
        <Route path="/compras/:id" element={<Compras />} />
        <Route path='/showprodutos'element={<ShowProdutos/>}/>
        <Route path='/checkout'element={<Checkout/>}/>
        <Route path='/favorito'element={<Favorito/>}/>
        <Route path='/payment'element={<PaymentPage/>}/>
      </Routes>
      <ToastContainer/>
    </Router>
    
  );
}

export default App;
