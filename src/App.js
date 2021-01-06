import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

// estilo
import "./App.css";
// componentes
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Produtos from "./Components/Produtos/Produtos";
import Contato from "./Components/Contato/Contato";
import Produto from './Components/Produto/Produto';



const App = () => {
  return (

    <div className="App">

      <BrowserRouter>
        <Header />

        <div className="content">
          <Routes>
            <Route path="/" element={<Produtos />} />
            <Route path="/produto/:id" element={<Produto />} />
            <Route path="Contato" element={<Contato />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </div>


  )
}

export default App
